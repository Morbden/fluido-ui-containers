import {
  Flui,
  interpolateBorderStyles,
  interpolateBorderWidths,
  interpolateColors,
  interpolateDisplay,
  interpolateOpacity,
  interpolateOverflow,
  interpolateRadius,
  interpolateShadows,
  interpolateSizes,
  interpolateSpace,
} from '../stitches'

export const Box = Flui('div', {
  variants: {
    background: interpolateColors((key) => ({
      background: key,
    })),
    bg: interpolateColors((key) => ({
      background: key,
    })),
    backgroundColor: interpolateColors((key) => ({
      backgroundColor: key,
    })),
    bgColor: interpolateColors((key) => ({
      backgroundColor: key,
    })),
    color: interpolateColors((key) => ({
      color: key,
    })),
    strokeColor: interpolateColors((key) => ({
      stroke: key,
    })),
    fillColor: interpolateColors((key) => ({
      fill: key,
    })),
    margin: {
      ...interpolateSpace((key) => ({
        margin: key,
      })),
      auto: {
        margin: 'auto',
      },
      full: {
        margin: '100%',
      },
    },
    m: {
      ...interpolateSpace((key) => ({
        margin: key,
      })),
      auto: {
        margin: 'auto',
      },
      full: {
        margin: '100%',
      },
    },
    marginTop: {
      ...interpolateSpace((key) => ({
        marginTop: key,
      })),
      auto: {
        marginTop: 'auto',
      },
      full: {
        marginTop: '100%',
      },
    },
    mt: {
      ...interpolateSpace((key) => ({
        marginTop: key,
      })),
      auto: {
        marginTop: 'auto',
      },
      full: {
        marginTop: '100%',
      },
    },
    marginRight: {
      ...interpolateSpace((key) => ({
        marginRight: key,
      })),
      auto: {
        marginRight: 'auto',
      },
      full: {
        marginRight: '100%',
      },
    },
    mr: {
      ...interpolateSpace((key) => ({
        marginRight: key,
      })),
      auto: {
        marginRight: 'auto',
      },
      full: {
        marginRight: '100%',
      },
    },
    marginBottom: {
      ...interpolateSpace((key) => ({
        marginBottom: key,
      })),
      auto: {
        marginBottom: 'auto',
      },
      full: {
        marginBottom: '100%',
      },
    },
    mb: {
      ...interpolateSpace((key) => ({
        marginBottom: key,
      })),
      auto: {
        marginBottom: 'auto',
      },
      full: {
        marginBottom: '100%',
      },
    },
    marginLeft: {
      ...interpolateSpace((key) => ({
        marginLeft: key,
      })),
      auto: {
        marginLeft: 'auto',
      },
      full: {
        marginLeft: '100%',
      },
    },
    ml: {
      ...interpolateSpace((key) => ({
        marginLeft: key,
      })),
      auto: {
        marginLeft: 'auto',
      },
      full: {
        marginLeft: '100%',
      },
    },
    mx: {
      ...interpolateSpace((key) => ({
        marginRight: key,
        marginLeft: key,
      })),
      auto: {
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      full: {
        marginRight: '100%',
        marginLeft: '100%',
      },
    },
    my: {
      ...interpolateSpace((key) => ({
        marginTop: key,
        marginBottom: key,
      })),
      auto: {
        marginTop: 'auto',
        marginBottom: 'auto',
      },
      full: {
        marginTop: '100%',
        marginBottom: '100%',
      },
    },
    marginInline: {
      ...interpolateSpace((key) => ({
        marginInline: key,
      })),
      auto: {
        marginInline: 'auto',
      },
      full: {
        marginInline: '100%',
      },
    },
    mil: {
      ...interpolateSpace((key) => ({
        marginInline: key,
      })),
      auto: {
        marginInline: 'auto',
      },
      full: {
        marginInline: '100%',
      },
    },
    marginInlineStart: {
      ...interpolateSpace((key) => ({
        marginInlineStart: key,
      })),
      auto: {
        marginInlineStart: 'auto',
      },
      full: {
        marginInlineStart: '100%',
      },
    },
    mis: {
      ...interpolateSpace((key) => ({
        marginInlineStart: key,
      })),
      auto: {
        marginInlineStart: 'auto',
      },
      full: {
        marginInlineStart: '100%',
      },
    },
    marginInlineEnd: {
      ...interpolateSpace((key) => ({
        marginInlineEnd: key,
      })),
      auto: {
        marginInlineEnd: 'auto',
      },
      full: {
        marginInlineEnd: '100%',
      },
    },
    mie: {
      ...interpolateSpace((key) => ({
        marginInlineEnd: key,
      })),
      auto: {
        marginInlineEnd: 'auto',
      },
      full: {
        marginInlineEnd: '100%',
      },
    },
    marginBlock: {
      ...interpolateSpace((key) => ({
        marginBlock: key,
      })),
      auto: {
        marginBlock: 'auto',
      },
      full: {
        marginBlock: '100%',
      },
    },
    mbl: {
      ...interpolateSpace((key) => ({
        marginBlock: key,
      })),
      auto: {
        marginBlock: 'auto',
      },
      full: {
        marginBlock: '100%',
      },
    },
    marginBlockStart: {
      ...interpolateSpace((key) => ({
        marginBlockStart: key,
      })),
      auto: {
        marginBlockStart: 'auto',
      },
      full: {
        marginBlockStart: '100%',
      },
    },
    mbs: {
      ...interpolateSpace((key) => ({
        marginBlockStart: key,
      })),
      auto: {
        marginBlockStart: 'auto',
      },
      full: {
        marginBlockStart: '100%',
      },
    },
    marginBlockEnd: {
      ...interpolateSpace((key) => ({
        marginBlockEnd: key,
      })),
      auto: {
        marginBlockEnd: 'auto',
      },
      full: {
        marginBlockEnd: '100%',
      },
    },
    mbe: {
      ...interpolateSpace((key) => ({
        marginBlockEnd: key,
      })),
      auto: {
        marginBlockEnd: 'auto',
      },
      full: {
        marginBlockEnd: '100%',
      },
    },
    padding: {
      ...interpolateSpace((key) => ({
        padding: key,
      })),
      auto: {
        padding: 'auto',
      },
      full: {
        padding: '100%',
      },
    },
    p: {
      ...interpolateSpace((key) => ({
        padding: key,
      })),
      auto: {
        padding: 'auto',
      },
      full: {
        padding: '100%',
      },
    },
    paddingTop: {
      ...interpolateSpace((key) => ({
        paddingTop: key,
      })),
      auto: {
        paddingTop: 'auto',
      },
      full: {
        paddingTop: '100%',
      },
    },
    pt: {
      ...interpolateSpace((key) => ({
        paddingTop: key,
      })),
      auto: {
        paddingTop: 'auto',
      },
      full: {
        paddingTop: '100%',
      },
    },
    paddingRight: {
      ...interpolateSpace((key) => ({
        paddingRight: key,
      })),
      auto: {
        paddingRight: 'auto',
      },
      full: {
        paddingRight: '100%',
      },
    },
    pr: {
      ...interpolateSpace((key) => ({
        paddingRight: key,
      })),
      auto: {
        paddingRight: 'auto',
      },
      full: {
        paddingRight: '100%',
      },
    },
    paddingBottom: {
      ...interpolateSpace((key) => ({
        paddingBottom: key,
      })),
      auto: {
        paddingBottom: 'auto',
      },
      full: {
        paddingBottom: '100%',
      },
    },
    pb: {
      ...interpolateSpace((key) => ({
        paddingBottom: key,
      })),
      auto: {
        paddingBottom: 'auto',
      },
      full: {
        paddingBottom: '100%',
      },
    },
    paddingLeft: {
      ...interpolateSpace((key) => ({
        paddingLeft: key,
      })),
      auto: {
        paddingLeft: 'auto',
      },
      full: {
        paddingLeft: '100%',
      },
    },
    pl: {
      ...interpolateSpace((key) => ({
        paddingLeft: key,
      })),
      auto: {
        paddingLeft: 'auto',
      },
      full: {
        paddingLeft: '100%',
      },
    },
    px: {
      ...interpolateSpace((key) => ({
        paddingRight: key,
        paddingLeft: key,
      })),
      auto: {
        paddingRight: 'auto',
        paddingLeft: 'auto',
      },
      full: {
        paddingRight: '100%',
        paddingLeft: '100%',
      },
    },
    py: {
      ...interpolateSpace((key) => ({
        paddingTop: key,
        paddingBottom: key,
      })),
      auto: {
        paddingTop: 'auto',
        paddingBottom: 'auto',
      },
      full: {
        paddingTop: '100%',
        paddingBottom: '100%',
      },
    },
    paddingInline: {
      ...interpolateSpace((key) => ({
        paddingInline: key,
      })),
      auto: {
        paddingInline: 'auto',
      },
      full: {
        paddingInline: '100%',
      },
    },
    pil: {
      ...interpolateSpace((key) => ({
        paddingInline: key,
      })),
      auto: {
        paddingInline: 'auto',
      },
      full: {
        paddingInline: '100%',
      },
    },
    paddingInlineStart: {
      ...interpolateSpace((key) => ({
        paddingInlineStart: key,
      })),
      auto: {
        paddingInlineStart: 'auto',
      },
      full: {
        paddingInlineStart: '100%',
      },
    },
    pis: {
      ...interpolateSpace((key) => ({
        paddingInlineStart: key,
      })),
      auto: {
        paddingInlineStart: 'auto',
      },
      full: {
        paddingInlineStart: '100%',
      },
    },
    paddingInlineEnd: {
      ...interpolateSpace((key) => ({
        paddingInlineEnd: key,
      })),
      auto: {
        paddingInlineEnd: 'auto',
      },
      full: {
        paddingInlineEnd: '100%',
      },
    },
    pie: {
      ...interpolateSpace((key) => ({
        paddingInlineEnd: key,
      })),
      auto: {
        paddingInlineEnd: 'auto',
      },
      full: {
        paddingInlineEnd: '100%',
      },
    },
    paddingBlock: {
      ...interpolateSpace((key) => ({
        paddingBlock: key,
      })),
      auto: {
        paddingBlock: 'auto',
      },
      full: {
        paddingBlock: '100%',
      },
    },
    pbl: {
      ...interpolateSpace((key) => ({
        paddingBlock: key,
      })),
      auto: {
        paddingBlock: 'auto',
      },
      full: {
        paddingBlock: '100%',
      },
    },
    paddingBlockStart: {
      ...interpolateSpace((key) => ({
        paddingBlockStart: key,
      })),
      auto: {
        paddingBlockStart: 'auto',
      },
      full: {
        paddingBlockStart: '100%',
      },
    },
    pbs: {
      ...interpolateSpace((key) => ({
        paddingBlockStart: key,
      })),
      auto: {
        paddingBlockStart: 'auto',
      },
      full: {
        paddingBlockStart: '100%',
      },
    },
    paddingBlockEnd: {
      ...interpolateSpace((key) => ({
        paddingBlockEnd: key,
      })),
      auto: {
        paddingBlockEnd: 'auto',
      },
      full: {
        paddingBlockEnd: '100%',
      },
    },
    pbe: {
      ...interpolateSpace((key) => ({
        paddingBlockEnd: key,
      })),
      auto: {
        paddingBlockEnd: 'auto',
      },
      full: {
        paddingBlockEnd: '100%',
      },
    },
    borderColor: interpolateColors((key) => ({
      borderColor: key,
    })),
    borderStyle: interpolateBorderStyles((key) => ({
      borderStyle: key,
    })),
    border: interpolateBorderWidths((key) => ({
      borderWidth: key,
    })),
    borderRadius: interpolateRadius((key) => ({
      borderRadius: key,
    })),
    radius: interpolateRadius((key) => ({
      borderRadius: key,
    })),
    borderTopRadius: interpolateRadius((key) => ({
      borderTopRightRadius: key,
      borderTopLeftRadius: key,
    })),
    radiusT: interpolateRadius((key) => ({
      borderTopRightRadius: key,
      borderTopLeftRadius: key,
    })),
    borderTopRightRadius: interpolateRadius((key) => ({
      borderTopRightRadius: key,
    })),
    radiusTR: interpolateRadius((key) => ({
      borderTopRightRadius: key,
    })),
    borderRightRadius: interpolateRadius((key) => ({
      borderTopRightRadius: key,
      borderBottomRightRadius: key,
    })),
    radiusR: interpolateRadius((key) => ({
      borderTopRightRadius: key,
      borderBottomRightRadius: key,
    })),
    borderBottomRightRadius: interpolateRadius((key) => ({
      borderBottomRightRadius: key,
    })),
    radiusBR: interpolateRadius((key) => ({
      borderBottomRightRadius: key,
    })),
    borderBottomRadius: interpolateRadius((key) => ({
      borderBottomRightRadius: key,
      borderBottomLeftRadius: key,
    })),
    radiusB: interpolateRadius((key) => ({
      borderBottomRightRadius: key,
      borderBottomLeftRadius: key,
    })),
    borderBottomLeftRadius: interpolateRadius((key) => ({
      borderBottomLeftRadius: key,
    })),
    radiusBL: interpolateRadius((key) => ({
      borderBottomLeftRadius: key,
    })),
    borderLeftRadius: interpolateRadius((key) => ({
      borderTopLeftRadius: key,
      borderBottomLeftRadius: key,
    })),
    radiusL: interpolateRadius((key) => ({
      borderTopLeftRadius: key,
      borderBottomLeftRadius: key,
    })),
    shadow: interpolateShadows((key) => {
      const s: number = parseInt(key)
      const sc: string = s * 0.25 + 'rem'

      return {
        boxShadow: `
0px calc(${sc} / 8 * (${s}/ 2))
calc(${sc} / 8 * ($shadow)) calc(${sc} / 8 * (${s}* -0.25))
rgb(0 0 0 / calc(0.12 + ${s}/ 50)),
0px calc(${sc} / 6 * (${s}/ 2 + 1))
calc(${sc} / 6 * (${s}* 1.25))
calc(${sc} / 6 * (${s}* -0.25)) rgb(0 0 0 / 0.12),
0px calc(${sc} / 4 * (${s}/ 2))
calc(${sc} / 4 * (${s}* 1.25))
calc(${sc} / 4 * (${s}* -0.5))
rgb(0 0 0 / calc(0.12 - ${s}/ 50));`,
      }
    }),
    width: interpolateSizes((key) => ({
      width: key,
    })),
    w: interpolateSizes((key) => ({
      width: key,
    })),
    minWidth: interpolateSizes((key) => ({
      minWidth: key,
    })),
    minW: interpolateSizes((key) => ({
      minWidth: key,
    })),
    maxWidth: interpolateSizes((key) => ({
      maxWidth: key,
    })),
    maxW: interpolateSizes((key) => ({
      maxWidth: key,
    })),
    height: interpolateSizes((key) => ({
      height: key,
    })),
    h: interpolateSizes((key) => ({
      height: key,
    })),
    minHeight: interpolateSizes((key) => ({
      minHeight: key,
    })),
    minH: interpolateSizes((key) => ({
      minHeight: key,
    })),
    maxHeight: interpolateSizes((key) => ({
      maxHeight: key,
    })),
    maxH: interpolateSizes((key) => ({
      maxHeight: key,
    })),
    size: interpolateSizes((key) => ({
      width: key,
      height: key,
    })),
    preventSelection: {
      true: {
        userSelection: 'none',
      },
    },
    opacity: interpolateOpacity((key) => ({
      opacity: key,
    })),
    overflow: interpolateOverflow((key) => ({
      overflow: key,
    })),
    overflowX: interpolateOverflow((key) => ({
      overflowX: key,
    })),
    overflowY: interpolateOverflow((key) => ({
      overflowY: key,
    })),
    display: interpolateDisplay((key) => ({
      display: key,
    })),
    d: interpolateDisplay((key) => ({
      display: key,
    })),
  },
  defaultVariants: {
    borderColor: 'current',
    borderStyle: 'solid',
  },
})

//   #if($gradient && $gradientType == linear-gradient) {
//     background-image: #or($gradientType, linear-gradient)
//       (#or($gradientDirection, to right), $gradient);
//   }

//   #if($textDecoration) {
//     text-decoration-color: #or($textDecorationColor, currentColor);
//     text-decoration-style: #or($textDecorationStyle, solid);
//     text-decoration-thickness: #or($textDecorationThickness, from-font);
//     text-decoration-skip-ink: #and($avoidSkipInk, none);
//     text-decoration-line: $textDecoration;
//   }

//   font-family: $fontFamily, $theme.fontFamily.base;
//   font-size: ~$fontSize;
//   font-weight: $fontWeight;
//   letter-spacing: $letterSpacing;
//   line-height: ~$lineHeight;
//   text-align: $textAlign;
//   font-style: $fontStyle;
//   text-decoration: $textDecoration;
//   text-transform: $textTransform;

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
