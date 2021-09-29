import { Flui, interpolateColors } from '../stitches'

export const Box = Flui('div', {
  variants: {
    bg: interpolateColors((key) => ({
      background: key,
    })),
    background: interpolateColors((key) => ({
      background: key,
    })),
    bgColor: interpolateColors((key) => ({
      backgroundColor: key,
    })),
    backgroundColor: interpolateColors((key) => ({
      backgroundColor: key,
    })),
    color: interpolateColors((key) => ({
      color: key,
    })),
    borderColor: interpolateColors((key) => ({
      borderColor: key,
    })),
    borderStyle: {
      dashed: {
        borderStyle: 'dashed',
      },
      dotted: {
        borderStyle: 'dotted',
      },
      double: {
        borderStyle: 'double',
      },
      groove: {
        borderStyle: 'groove',
      },
      inherit: {
        borderStyle: 'inherit',
      },
      initial: {
        borderStyle: 'initial',
      },
      inset: {
        borderStyle: 'inset',
      },
      none: {
        borderStyle: 'none',
      },
      outset: {
        borderStyle: 'outset',
      },
      ridge: {
        borderStyle: 'ridge',
      },
      solid: {
        borderStyle: 'solid',
      },
    },
  },
})

//   border?: Length

//   margin?:
//     | 'auto'
//     | 'full'
//     | Length
//     | [Length, Length]
//     | [Length, Length, Length]
//     | [Length, Length, Length, Length]

//   opacity?: string

//   padding?:
//     | Length
//     | [Length, Length]
//     | [Length, Length, Length]
//     | [Length, Length, Length, Length]

//   srOnly?: boolean

//   textDecoration?: 'underline' | 'overline' | 'line-through' | 'none'

//   textDecorationColor?: string

//   textDecorationStyle?:
//     | 'solid'
//     | 'dashed'
//     | 'dotted'
//     | 'wavy'
//     | 'double'
//     | 'inherit'
//     | 'unset'

//   textDecorationThickness?: 'auto' | 'from-font' | Length

//   avoidSkipInk?: boolean

//   w?: Length

//   width?: Length

//   minW?: Length

//   minWidth?: Length

//   /** Value for CSS `max-width`
//    * @default null
//    */
//   maxW?: Length

//   /** Value for CSS `max-width`
//    * @default null
//    */
//   maxWidth?: Length

//   /** Value for CSS `height`
//    * @default null
//    */
//   h?: Length

//   /** Value for CSS `height`
//    * @default null
//    */
//   height?: Length

//   /** Value for CSS `min-height`
//    * @default null
//    */
//   minH?: Length

//   /** Value for CSS `min-height`
//    * @default null
//    */
//   minHeight?: Length

//   /** Value for CSS `max-height`
//    * @default null
//    */
//   maxH?: Length

//   /** Value for CSS `max-height`
//    * @default null
//    */
//   maxHeight?: Length

//   /** One or two values for CSS `width` and `height`.
//    * @default null
//    */
//   size?: Length | [Length, Length]

//   fontFamily?: string
//   fontSize?: Length
//   fontWeight?: string
//   fontStyle?: string
//   letterSpacing?: string
//   lineHeight?: Length
//   textAlign?:
//     | 'center'
//     | 'end'
//     | 'inherit'
//     | 'initial'
//     | 'justify'
//     | 'left'
//     | 'right'
//     | 'start'
//     | 'unset'
//   textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'inherit' | 'unset'

//   overflow?: 'auto' | 'hidden' | 'visible' | 'scroll'
//   overflowX?: 'auto' | 'hidden' | 'visible' | 'scroll'
//   overflowY?: 'auto' | 'hidden' | 'visible' | 'scroll'

//   d?:
//     | 'block'
//     | 'flex'
//     | 'flow-root'
//     | 'grid'
//     | 'inline-block'
//     | 'inline-flex'
//     | 'inline-grid'
//     | 'inline'
//     | 'none'
//   display?:
//     | 'block'
//     | 'flex'
//     | 'flow-root'
//     | 'grid'
//     | 'inline-block'
//     | 'inline-flex'
//     | 'inline-grid'
//     | 'inline'
//     | 'none'

//   borderRadius?: Length
//   radius?: Length
//   borderTopLeftRadius?: Length
//   radiusTL?: Length
//   borderTopRightRadius?: Length
//   radiusTR?: Length
//   borderBottomLeftRadius?: Length
//   radiusBL?: Length
//   borderBottomRightRadius?: Length
//   radiusBR?: Length
//   borderTopRadius?: Length
//   radiusT?: Length
//   borderRightRadius?: Length
//   radiusR?: Length
//   borderBottomRadius?: Length
//   radiusB?: Length
//   borderLeftRadius?: Length
//   radiusL?: Length

//   // parent
//   alignItems?: string
//   items?: string
//   alignContent?: string
//   justifyItems?: string
//   justifyContent?: string
//   justify?: string
//   flexWrap?: string
//   wrap?: string
//   flexDirection?: string
//   direction?: string
//   // children
//   flex?: string
//   flexGrow?: string
//   flexShrink?: string
//   flexBasis?: string
//   justifySelf?: string
//   alignSelf?: string
//   order?: string

//   boxShadow?: string
//   shadow?: number

//   fillColor?: string
//   strokeColor?: string

//   sticky?: boolean

//   gradient?: string[] | string
//   gradientType?:
//     | 'linear-gradient'
//     | 'radial-gradient'
//     | 'conic-gradient'
//     | 'repeating-linear-gradient'
//     | 'repeating-radial-gradient'
//   gradientDirection?:
//     | 'to right'
//     | 'to left'
//     | 'to top'
//     | 'to bottom'
//     | 'to top right'
//     | 'to top left'
//     | 'to bottom right'
//     | 'to bottom left'
//     | string
// }

// export const Box_ = styled('div')<BoxProps_>`
//   background: #or($background, $bg);
//   background-color: #or($backgroundColor, $bgColor);
//   stroke: $strokeColor;
//   fill: $fillColor;

//   #if($gradient && $gradientType == linear-gradient) {
//     background-image: #or($gradientType, linear-gradient)
//       (#or($gradientDirection, to right), $gradient);
//   }

//   color: $color;

//   margin: #or(~$margin, ~$m);
//   margin-top: #or(~$marginTop, ~$mt, ~$my);
//   margin-right: #or(~$marginRight, ~$mr, ~$mx);
//   margin-bottom: #or(~$marginBottom, ~$mb, ~$my);
//   margin-left: #or(~$marginLeft, ~$ml, ~$mx);
//   margin-inline: #or(~$marginInline, ~$mil);
//   margin-inline-start: #or(~$marginInlineStart, ~$mis);
//   margin-inline-end: #or(~$marginInlineEnd, ~$mie);
//   margin-block: #or(~$marginBlock, ~$mbl);
//   margin-block-start: #or(~$marginBlockStart, ~$mbs);
//   margin-block-end: #or(~$marginBlockEnd, ~$mbe);
//   margin-inline: #or(~$marginInline, ~$mil);
//   margin-inline-start: #or(~$marginInlineStart, ~$mis);
//   margin-inline-end: #or(~$marginInlineEnd, ~$mie);

//   padding: #or(~$padding, ~$p);
//   padding-top: #or(~$paddingTop, ~$pt, ~$py);
//   padding-right: #or(~$paddingRight, ~$pr, ~$px);
//   padding-bottom: #or(~$paddingBottom, ~$pb, ~$py);
//   padding-left: #or(~$paddingLeft, ~$pl, ~$px);
//   padding-inline: #or(~$paddingInline, ~$pil);
//   padding-inline-start: #or(~$paddingInlineStart, ~$pis);
//   padding-inline-end: #or(~$paddingInlineEnd, ~$pie);
//   padding-block: #or(~$paddingBlock, ~$pbl);
//   padding-block-start: #or(~$paddingBlockStart, ~$pbs);
//   padding-block-end: #or(~$paddingBlockEnd, ~$pbe);
//   padding-inline: #or(~$paddingInline, ~$pil);
//   padding-inline-start: #or(~$paddingInlineStart, ~$pis);
//   padding-inline-end: #or(~$paddingInlineEnd, ~$pie);

//   #if($border) {
//     border-color: #or($borderColor, currentColor);
//     border-style: #or($borderStyle, solid);
//     border-width: ~$border;
//   }

//   border-radius: #or(~$borderRadius, ~$radius);
//   border-top-left-radius: #or(
//     ~$borderTopLeftRadius,
//     ~$radiusTL,
//     ~$borderTopRadius,
//     ~$radiusT,
//     ~$borderLeftRadius,
//     ~$radiusL
//   );
//   border-top-right-radius: #or(
//     ~$borderTopRightRadius,
//     ~$radiusTR,
//     ~$borderTopRadius,
//     ~$radiusT,
//     ~$borderRightRadius,
//     ~$radiusR
//   );
//   border-bottom-left-radius: #or(
//     ~$borderBottomLeftRadius,
//     ~$radiusBL,
//     ~$borderBottomRadius,
//     ~$radiusB,
//     ~$borderLeftRadius,
//     ~$radiusL
//   );
//   border-bottom-right-radius: #or(
//     ~$borderBottomRightRadius,
//     ~$radiusBR,
//     ~$borderBottomRadius,
//     ~$radiusB,
//     ~$borderRightRadius,
//     ~$radiusR
//   );

//   #if($boxShadow) {
//     box-shadow: #or($boxShadow);
//   }

//   #if($shadow) {
//     box-shadow: 0px calc(~$shadow / 8 * ($shadow / 2))
//         calc(~$shadow / 8 * ($shadow)) calc(~$shadow / 8 * ($shadow * -0.25))
//         rgb(0 0 0 / calc(0.12 + $shadow / 50)),
//       0px calc(~$shadow / 6 * ($shadow / 2 + 1))
//         calc(~$shadow / 6 * ($shadow * 1.25))
//         calc(~$shadow / 6 * ($shadow * -0.25)) rgb(0 0 0 / 0.12),
//       0px calc(~$shadow / 4 * ($shadow / 2))
//         calc(~$shadow / 4 * ($shadow * 1.25))
//         calc(~$shadow / 4 * ($shadow * -0.5))
//         rgb(0 0 0 / calc(0.12 - $shadow / 50));
//   }

//   #if($textDecoration) {
//     text-decoration-color: #or($textDecorationColor, currentColor);
//     text-decoration-style: #or($textDecorationStyle, solid);
//     text-decoration-thickness: #or($textDecorationThickness, from-font);
//     text-decoration-skip-ink: #and($avoidSkipInk, none);
//     text-decoration-line: $textDecoration;
//   }

//   width: #or(~$width, ~$w, ~$size);
//   min-width: #or(~$minWidth, ~$minW);
//   max-width: #or(~$maxWidth, ~$maxW);

//   height: #or(~$height, ~$h, ~$size);
//   min-height: #or(~$minHeight, ~$minH);
//   max-height: #or(~$maxHeight, ~$maxH);

//   opacity: $opacity;

//   user-select: #and($preventSelection, none);

//   font-family: $fontFamily, $theme.fontFamily.base;
//   font-size: ~$fontSize;
//   font-weight: $fontWeight;
//   letter-spacing: $letterSpacing;
//   line-height: ~$lineHeight;
//   text-align: $textAlign;
//   font-style: $fontStyle;
//   text-decoration: $textDecoration;
//   text-transform: $textTransform;

//   overflow: $overflow;
//   overflow-x: $overflowX;
//   overflow-y: $overflowY;

//   display: #or($display, $d);

//   align-items: #or($alignItems, $items);
//   align-content: $alignContent;
//   justify-content: #or($justifyItems, $justifyContent, $justify);
//   flex-wrap: #or($flexWrap, $wrap);
//   flex-direction: #or($flexDirection, $direction);
//   flex: $flex;
//   flex-grow: $flexGrow;
//   flex-shrink: $flexShrink;
//   flex-basis: $flexBasis;

//   justify-self: $justifySelf;
//   align-self: $alignSelf;
//   order: $order;

//   #if($sticky) {
//     position: sticky;
//     top: 0;
//   }
// `
//
