import { DanmakuOptions } from './danmaku';
export declare function isDefaultColor(color: string): boolean;
export declare function createTimer(): {
    _prevPauseTime: number;
    _pausedTime: number;
    _paused: boolean;
    now(): number;
    play(): void;
    pause(): void;
};
export declare function getStorageOptions(): DanmakuOptions | undefined;
export declare function setStorageOptions(opts: DanmakuOptions): void;
export declare const SEND_SETTINGS = "Send settings";
export declare const SEND = "Send";
export declare const MODE = "Mode";
export declare const SCROLL = "Scroll";
export declare const TOP = "Top";
export declare const BOTTOM = "Bottom";
export declare const COLOR = "Color";
export declare const COLOUR = "Color";
export declare const DANMAKU_SETTINGS = "Danmaku settings";
export declare const ONOFF = "On/Off";
export declare const RESTORE = "Restore settings";
export declare const BLOCK_BT = "Block by type";
export declare const OPACITY = "Opacity &nbsp;";
export declare const DISPLAY_A = "Area &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
export declare const HALF_S = "Half";
export declare const FULL_S = "Full";
export declare const DANMAKU_S = "Speed &nbsp;&nbsp;&nbsp;";
export declare const SLOW = "Slow";
export declare const FAST = "Fast";
export declare const FONTSIZE = "Font size";
export declare const SMALL = "Small";
export declare const BIG = "Big";
export declare const UNLIMITED = "Unlimited";
export declare const BOTTOM_TT = "Bottom to top";
export declare const trans: {
    "Send settings": string;
    Send: string;
    Mode: string;
    Scroll: string;
    Top: string;
    Bottom: string;
    Color: string;
    "Danmaku settings": string;
    "On/Off": string;
    "Restore settings": string;
    "Block by type": string;
    "Opacity &nbsp;": string;
    "Area &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;": string;
    Half: string;
    Full: string;
    "Speed &nbsp;&nbsp;&nbsp;": string;
    Slow: string;
    Fast: string;
    "Font size": string;
    Small: string;
    Big: string;
    Unlimited: string;
    "Bottom to top": string;
};
export declare const EVENT: {
    readonly DANMAKU_SEND: "DanmakuSend";
    readonly DANMAKU_UPDATE_OPTIONS: "DanmakuUpdateOptions";
};
