/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Buffer } from "buffer";
import { PoseModel } from "pose-format/dist/types";
export { Buffer } from "buffer";
export { PoseModel } from "pose-format/dist/types";
export namespace Components {
    interface PoseViewer {
        "aspectRatio": number;
        "autoplay": boolean;
        "background": string;
        "currentTime": number;
        "duration": number;
        "ended": boolean;
        "getPose": () => Promise<PoseModel>;
        "height": string;
        "loop": boolean;
        "nextFrame": () => Promise<void>;
        "padding": string;
        "pause": () => Promise<void>;
        "paused": boolean;
        "play": () => Promise<void>;
        "playbackRate": number;
        "readyState": number;
        "renderer": 'canvas' | 'svg' | 'interactive';
        "src": string | Buffer;
        "syncMedia": (media: HTMLMediaElement) => Promise<void>;
        "thickness": number;
        "width": string;
    }
}
export interface PoseViewerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPoseViewerElement;
}
declare global {
    interface HTMLPoseViewerElementEventMap {
        "canplaythrough$": void;
        "ended$": void;
        "loadeddata$": void;
        "loadedmetadata$": void;
        "loadstart$": void;
        "pause$": void;
        "play$": void;
        "firstRender$": void;
        "render$": void;
    }
    interface HTMLPoseViewerElement extends Components.PoseViewer, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPoseViewerElementEventMap>(type: K, listener: (this: HTMLPoseViewerElement, ev: PoseViewerCustomEvent<HTMLPoseViewerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPoseViewerElementEventMap>(type: K, listener: (this: HTMLPoseViewerElement, ev: PoseViewerCustomEvent<HTMLPoseViewerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPoseViewerElement: {
        prototype: HTMLPoseViewerElement;
        new (): HTMLPoseViewerElement;
    };
    interface HTMLElementTagNameMap {
        "pose-viewer": HTMLPoseViewerElement;
    }
}
declare namespace LocalJSX {
    interface PoseViewer {
        "aspectRatio"?: number;
        "autoplay"?: boolean;
        "background"?: string;
        "currentTime"?: number;
        "duration"?: number;
        "ended"?: boolean;
        "height"?: string;
        "loop"?: boolean;
        "onCanplaythrough$"?: (event: PoseViewerCustomEvent<void>) => void;
        "onEnded$"?: (event: PoseViewerCustomEvent<void>) => void;
        "onFirstRender$"?: (event: PoseViewerCustomEvent<void>) => void;
        "onLoadeddata$"?: (event: PoseViewerCustomEvent<void>) => void;
        "onLoadedmetadata$"?: (event: PoseViewerCustomEvent<void>) => void;
        "onLoadstart$"?: (event: PoseViewerCustomEvent<void>) => void;
        "onPause$"?: (event: PoseViewerCustomEvent<void>) => void;
        "onPlay$"?: (event: PoseViewerCustomEvent<void>) => void;
        "onRender$"?: (event: PoseViewerCustomEvent<void>) => void;
        "padding"?: string;
        "paused"?: boolean;
        "playbackRate"?: number;
        "readyState"?: number;
        "renderer"?: 'canvas' | 'svg' | 'interactive';
        "src"?: string | Buffer;
        "thickness"?: number;
        "width"?: string;
    }
    interface IntrinsicElements {
        "pose-viewer": PoseViewer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pose-viewer": LocalJSX.PoseViewer & JSXBase.HTMLAttributes<HTMLPoseViewerElement>;
        }
    }
}
