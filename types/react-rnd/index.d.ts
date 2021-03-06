// Type definitions for react-rnd 7.3
// Project: https://github.com/bokuweb/react-rnd
// Definitions by: Ragg <https://github.com/Ragg->
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
import React = require('react');

type CSSProperties = React.CSSProperties;

declare namespace Rnd {
    type Direction =
        | 'bottom'
        | 'bottomLeft'
        | 'bottomRight'
        | 'left'
        | 'right'
        | 'top'
        | 'topLeft'
        | 'topRight';

    interface HandleClasses {
        bottom?: string;
        bottomLeft?: string;
        bottomRight?: string;
        left?: string;
        right?: string;
        top?: string;
        topLeft?: string;
        topRight?: string;
    }

    interface HandleStyles {
        bottom?: CSSProperties;
        bottomLeft?: CSSProperties;
        bottomRight?: CSSProperties;
        left?: CSSProperties;
        right?: CSSProperties;
        top?: CSSProperties;
        topLeft?: CSSProperties;
        topRight?: CSSProperties;
    }

    interface Position {
        x: number;
        y: number;
    }

    interface Size {
        width: number;
        height: number;
    }

    interface DraggableData {
        node: HTMLElement;
        x: number;
        y: number;
        deltaX: number;
        deltaY: number;
        lastX: number;
        lastY: number;
    }

    type DraggableEventHandler = (e: MouseEvent | TouchEvent, data: DraggableData) => void|false;

    type ResizeHandler = (
        e: MouseEvent|TouchEvent,
        direction: Direction,
        ref: HTMLDivElement,
        delta: Size,
        position: Position
    ) => void;

    interface Options {
        default: {
            x?: number;
            y?: number;
            width?: number|string;
            height?: number|string;
        };
        className: string;
        style: any;
        width: number|string;
        height: number|string;
        minWidth: number|string;
        minHeight: number|string;
        maxWidth: number|string;
        maxHeight: number|string;
        z: number;
        resizeHandleClasses: HandleClasses;
        resizeHandleStyles: HandleStyles;

        lockAspectRatio: boolean;
        enableResizing: boolean;

        onResizeStart: () => void;
        onResize: () => void;
        onResizeStop: ResizeHandler;

        onDragStart: DraggableEventHandler;
        onDrag: DraggableEventHandler;
        onDragStop: DraggableEventHandler;
    }
}

declare class Rnd extends React.Component<Partial<Rnd.Options>> {}

export = Rnd;
