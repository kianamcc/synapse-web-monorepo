import{T as p}from"./ThemesPlot-vWA8m0Uf.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-B6vegzDl.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-BtPK8Xf5.js";import"./OrientationBanner-DkmEu8ww.js";import"./index-BiABM7zM.js";import"./index-jL26_Tdg.js";import"./iframe-C7ZZ0tJ9.js";import"./spreadSx-CwcO6WA9.js";import"./react-Q48zzpqQ.js";import"./FullWidthAlert-KH7-cPlx.js";import"./Alert-BYyjJPXO.js";import"./createTheme-CYqCSXBz.js";import"./DefaultPropsProvider-BaJQA2z9.js";import"./useSlot-DtyCmT7o.js";import"./useForkRef-COfB-m0m.js";import"./createSimplePaletteValueFilter-B4WcSHb2.js";import"./createSvgIcon-3ocGpMNh.js";import"./Close-D02RjwJU.js";import"./IconButton-Ccbi1Krc.js";import"./useTimeout-Q5NueQY6.js";import"./ButtonBase-Cpa2hZQw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-rSba4AH8.js";import"./Paper-BBhN9Li4.js";import"./useTheme-DLyZrVj1.js";import"./useTheme-CCBKYA_N.js";import"./Stack-Bnhis5DF.js";import"./extendSxProp-CyXZT-CH.js";import"./getThemeProps-qLDLSUkn.js";import"./Box-CElDN2lR.js";import"./AlertTitle-Bg93ACEw.js";import"./Typography-sIVWjIv7.js";import"./index-DzEjapEh.js";import"./ClickAwayListener-DBCnr4i9.js";import"./getReactElementRef-BpSyMuG3.js";import"./index-PB3v-e0n.js";import"./index-CXUQQ7NY.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-CyxMG2Lo.js";import"./Tooltip-B8Ca4h6r.js";import"./index-Beyie8vy.js";import"./useControlled-IUjrSiMK.js";import"./Popper-BsmYiSO_.js";import"./Button-Bfd3_aE-.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-DT4b9CON.js";import"./QueryClientProvider-DvweCRTp.js";import"./Link-DulGgx7_.js";import"./Collapse-kXTM2RiY.js";import"./_baseUniq-CbUydBEl.js";import"./_Uint8Array-B0WjZf3K.js";import"./isArray-YIKNzQ6l.js";import"./_getTag-ohfK-TjG.js";import"./isEqual-dhI3ZA9D.js";import"./merge-DqYA71tY.js";import"./_initCloneObject-Cz9cO3Kh.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-s5_xMiSm.js";import"./inputBaseClasses-kkvSt9vt.js";import"./calculateFriendlyFileSize-DX_Sn0UC.js";import"./CheckCircleTwoTone-BQ0LZxD5.js";import"./InfoTwoTone-CNBCB-S5.js";import"./useMutation-B1e0RvlB.js";import"./dayjs.min-Bvvs6Fr9.js";import"./chunk-AYJ5UCUI-D-jAjeB5.js";import"./cloneDeep-G_YIi0g_.js";import"./Skeleton-CIkEHEVl.js";import"./SqlFunctions-B6aZ8mL4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DDbi5pSz.js";import"./Backdrop-BnSAxtKA.js";import"./LinearProgress-BcdLDYly.js";import"./uniq-DcAQOgM4.js";import"./Plot-kMtdt9hn.js";import"./index-Chjiymov.js";import"./_createAggregator-C-lCuWcN.js";import"./_baseEach-BBMnQWYO.js";import"./_baseIteratee-BVoWE12B.js";import"./_baseGet-DXAMiciY.js";import"./isSymbol-BzOFySpl.js";import"./toString-CfbYm880.js";import"./hasIn-DTT1qESk.js";import"./_baseOrderBy-DTwfVZOm.js";import"./_baseMap-bAQwh4hi.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    onPointClick: e => {
      console.log(e.event);
    },
    topBarPlot: {
      entityId: 'syn21641485',
      xField: 'totalCount',
      yField: 'groupBy',
      groupField: 'consortium',
      colors: {
        CSBC: 'rgba(64,123,160, 1)',
        'PS-ON': 'rgba(91,176,181,1)',
        ICBP: 'rgba(197, 191, 223, 1)',
        TEC: 'rgba(156, 196, 233, 1)'
      },
      whereClause: 'totalCount is not NULL'
    },
    sideBarPlot: {
      entityId: 'syn21649281',
      xField: 'totalCount',
      yField: 'theme',
      groupField: 'consortium',
      countLabel: 'grants',
      plotStyle: {
        backgroundColor: '#f5f9fa'
      },
      colors: {
        CSBC: '#1c76af',
        'PS-ON': '#5bb0b5',
        ICBP: '#9cc4e9',
        TEC: '#c5bfdf'
      }
    },
    dotPlot: {
      entityId: 'syn21639584',
      xField: 'totalCount',
      yField: 'theme',
      groupField: 'groupBy',
      infoField: 'themeDescription',
      whereClause: "groupBy IN ('publications', 'tools', 'datasets')",
      markerSymbols: {
        tools: 'y-down',
        datasets: 'diamond-x',
        publications: 'circle'
      },
      plotStyle: {
        markerLine: 'rgba(0, 0, 0,1)',
        markerFill: 'rgba(255, 255, 255,1)',
        markerSize: 11,
        backgroundColor: '#f5f9fa'
      }
    }
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Jo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Jo as __namedExportsOrder,Go as default};
