import { style } from './style';
import {
    styleObjectToStyleString,
    styleStringToStyleElement,
    createElement,
    windowLock,
    windowUnLock,
} from './utils';

class TwitterLikeImage extends HTMLElement {
    init = false;
    content: HTMLElement|null = null;
    backdrop: HTMLElement|null = null;
    backdropContent: HTMLElement|null = null;
    backdropCaption: HTMLElement|null = null;
    backdropPrev: HTMLElement|null = null;
    backdropNext: HTMLElement|null = null;
    backdropClose: HTMLElement|null = null;
    items: NodeListOf<HTMLImageElement>|null = null;
    srcArr: string[] = [];
    altArr: string[] = [];
    activeItemIdx: number = -1;
    lockPoint: number = 0;

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.appendTemplateToShadowDom();
    }
    connectedCallback() {
        if (!this.init) {
            this.init = true;
            this.setElementsToThis();
            this.appendItemElements();
            this.setEventOfBackdropElements();
            this.closeBackDrop();
        }
    }
    /**
     * shadowDOMに要素のテンプレートを追加する
     */
    appendTemplateToShadowDom() {
        const template = document.createElement('template');
        template.innerHTML = `
            <div class="twitter-like-image">
            <ul class="content"></ul>
            <div class="backdrop" tabindex="-1">
            <ul class="backdrop-content"></ul>
            <p class="backdrop-caption"></p>
            <button class="backdrop-prev" aria-label="previous"></button>
            <button class="backdrop-next" aria-label="next"></button>
            <button class="backdrop-close" aria-label="close"></button>
            </div>
            </div>
        `;

        const instance = template.content.cloneNode(true);
        const styleElement = styleStringToStyleElement(styleObjectToStyleString(style));
        this.shadowRoot?.append(instance, styleElement);
    }
    /**
     * 各種要素をthisに格納する
     */
    setElementsToThis() {
        const srcArr = this.getHostAttrArr('src');
        const altArr = this.getHostAttrArr('alt');
        const content = this.shadowRoot?.querySelector<HTMLElement>('.content');
        const backdrop = this.shadowRoot?.querySelector<HTMLElement>('.backdrop');
        const backdropContent = this.shadowRoot?.querySelector<HTMLElement>('.backdrop-content');
        const backdropCaption = this.shadowRoot?.querySelector<HTMLElement>('.backdrop-caption');
        const backdropPrev = this.shadowRoot?.querySelector<HTMLElement>('.backdrop-prev');
        const backdropNext = this.shadowRoot?.querySelector<HTMLElement>('.backdrop-next');
        const backdropClose = this.shadowRoot?.querySelector<HTMLElement>('.backdrop-close');
        if (!backdrop || !content || !backdropContent || !backdropCaption || !backdropPrev || !backdropNext || !backdropClose) {
            throw new Error('structure elements do not exist.')
        }

        this.altArr = altArr;
        this.srcArr = srcArr;
        this.content = content;
        this.backdrop = backdrop;
        this.backdropContent = backdropContent;
        this.backdropCaption = backdropCaption;
        this.backdropPrev = backdropPrev;
        this.backdropNext = backdropNext;
        this.backdropClose = backdropClose;
    }
    /**
     * item要素をcontent（backdrop含む）要素に追加する
     */
    appendItemElements() {
        const { content, backdropContent, srcArr, altArr } = this;
        if (!content || !backdropContent) {
            throw new Error('Either content or backdrop-content does not exist.')
        }

        srcArr.forEach((src, i) => {
            const contentImg = createElement<HTMLImageElement>('img', { src, alt: altArr[i] ?? '' });
            const button = createElement<HTMLButtonElement>('button', { type: 'button', 'aria-label': `画像を拡大表示する` }, [contentImg]);
            const item = createElement<HTMLLIElement>('li', { class: 'item' }, [button]);
            button.addEventListener('click', this.openBackDrop.bind(this, i));
            content.append(item);

            const backdropImg = createElement<HTMLImageElement>('img', { src, alt: altArr[i] ?? '' });
            const backdropContentItem = createElement<HTMLLIElement>('li', { class: 'backdrop-item' }, [backdropImg]);
            backdropContent.append(backdropContentItem);
        });
    }
    setEventOfBackdropElements() {
        const { backdrop, backdropPrev, backdropNext, backdropClose } = this;
        if (!backdrop || !backdropPrev || !backdropNext || !backdropClose) {
            throw new Error('');
        }

        backdrop.addEventListener('transitionend', this.readyBackdropContent.bind(this))
        backdrop.addEventListener('click', this.closeBackDropIfMe.bind(this))
        backdropPrev.addEventListener('click', this.switchTargetImageToPrevious.bind(this));
        backdropNext.addEventListener('click', this.switchTargetImageToNext.bind(this));
        backdropClose.addEventListener('click', this.closeBackDrop.bind(this));
    }
    readyBackdropContent(e: TransitionEvent) {
        const { backdropContent } = this;
        if (!backdropContent) {
            throw new Error('Either content or backdrop-content does not exist.')
        }

        if (e.target === e.currentTarget && e.propertyName === 'opacity') {
            if (backdropContent.classList.contains('is-animation')) {
                backdropContent.classList.remove('is-animation');
            } else {
                backdropContent.classList.add('is-animation');
            }
        }
    }
    /**
     * hostの属性を取得し、配列として返す
     * @param attrName
     */
    getHostAttrArr(attrName :string) {
        const attrArr = this.shadowRoot?.host.getAttribute(attrName)?.replace(/\s/g, '').split(',');

        if (!attrArr || attrArr.length < 1 || attrArr.length > 4) {
            throw new Error(`Something is wrong of ${attrName} attribute.`)
        }

        return attrArr;
    }
    openBackDrop(itemIdx: number) {
        const { backdrop } = this;
        if (!backdrop) {
            throw new Error('');
        }

        this.switchTargetImageTo(itemIdx);
        backdrop.classList.remove('is-hide');
        this.lockPoint = window.pageYOffset;
        windowLock();
    }
    closeBackDrop() {
        const { backdrop } = this;
        if (!backdrop) {
            throw new Error('');
        }

        this.switchTargetImageTo(-1);
        backdrop.classList.add('is-hide');
        windowUnLock(this.lockPoint);
        this.lockPoint = 0;
    }
    closeBackDropIfMe(e: MouseEvent) {
        if (e.target === e.currentTarget) {
            this.closeBackDrop()
        }
    }
    switchTargetImageTo(itemIdx: number) {
        this.activeItemIdx = itemIdx;
        this.translateTo(itemIdx);
        this.changeStateOfBackdropPrevBtn(itemIdx === 0);
        this.changeStateOfBackdropNextBtn(itemIdx >= this.srcArr.length - 1);
        this.setCaption(this.altArr[itemIdx] ?? '');
    }
    switchTargetImageToPrevious() {
        this.switchTargetImageTo(this.activeItemIdx - 1);
    }
    switchTargetImageToNext() {
        this.switchTargetImageTo(this.activeItemIdx + 1);
    }
    changeStateOfBackdropPrevBtn(boolean: boolean) {
        if (boolean) {
            this.backdropPrev?.classList.add('is-hide');
        } else {
            this.backdropPrev?.classList.remove('is-hide');
        }
    }
    changeStateOfBackdropNextBtn(boolean: boolean) {
        if (boolean) {
            this.backdropNext?.classList.add('is-hide');
        } else {
            this.backdropNext?.classList.remove('is-hide');
        }
    }
    translateTo(itemIdx: number) {
        const { backdropContent } = this;
        if (!backdropContent) {
            throw new Error('');
        }

        backdropContent.style.transform = `translateX(-${itemIdx * 100}%)`;
    }
    setCaption(caption: string) {
        const { backdropCaption } = this;
        if (!backdropCaption) {
            throw new Error('');
        }

        backdropCaption.innerText = caption;
    }
}
customElements.define('tl-img', TwitterLikeImage);