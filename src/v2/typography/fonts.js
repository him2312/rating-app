import { css } from 'styled-components';

const textStyleMixin = (size, lineHeight, weight) => {
    return css`
        font-size: ${size}px;
        line-height: ${lineHeight}px;
        font-weight: ${weight};
        font-family: Roboto;
        `;
};

//Text styles
export const ts44b = textStyleMixin(44, 51, 'bold');
export const ts28b = textStyleMixin(28, 33, 'bold');
export const ts24n = textStyleMixin(24, 28, 'normal');
export const ts20n = textStyleMixin(20, 23, 'normal');

//Button Style
export const tsBtn = textStyleMixin(17, 21, 'bold');
