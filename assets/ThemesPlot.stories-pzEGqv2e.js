import{T as p}from"./ThemesPlot-DcaArEG3.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BS7yqeVu.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DCD24UIR.js";import"./OrientationBanner-CGhK73qt.js";import"./index-VZePWZJ8.js";import"./index-CxNQf4-_.js";import"./iframe-Dg4AUp8p.js";import"./spreadSx-CwcO6WA9.js";import"./react-BE2NnvmD.js";import"./FullWidthAlert-9fheV2TI.js";import"./Alert-DD6LY4o6.js";import"./createTheme-BNZ2-g8i.js";import"./DefaultPropsProvider-CSmwSXtp.js";import"./useSlot-ZEQjcV4h.js";import"./useForkRef-DVZbic4O.js";import"./createSimplePaletteValueFilter-BTCFvpVs.js";import"./createSvgIcon-px9Ll1Sh.js";import"./Close-8Omd6HQo.js";import"./IconButton-DdwXXYxc.js";import"./useTimeout-CmN0NgJY.js";import"./ButtonBase-CYIBe76-.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CpqZJiGb.js";import"./Paper-Bi_y7tq5.js";import"./useTheme-Ct9xyNCZ.js";import"./useTheme-Cwe9o9si.js";import"./Stack-BkBDhbY7.js";import"./useThemeProps-DYPM01el.js";import"./getThemeProps-z9TSZhd3.js";import"./extendSxProp-doqBFT6I.js";import"./Box-29dRnPqp.js";import"./AlertTitle-YP7vES6y.js";import"./Typography-CM0Hx7IB.js";import"./index-CylRv6A2.js";import"./ClickAwayListener-Bk5rN7ro.js";import"./getReactElementRef-CbfHskog.js";import"./index-DdouHa0C.js";import"./index-BHXNWvPG.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DfWYfHBy.js";import"./Tooltip-BWVeFaIO.js";import"./index-BuW0orvV.js";import"./useControlled-CMSkeTs6.js";import"./Popper-DK9BpulM.js";import"./Button-Joy47VZj.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-BmYDawry.js";import"./QueryClientProvider-BzV6DB3V.js";import"./Link-4Y6YnrJW.js";import"./Collapse-BssXeki7.js";import"./_baseUniq-Cqxswx2d.js";import"./_Uint8Array-DcB2X5w5.js";import"./isArray-KmhwUPCT.js";import"./_getTag-BUgEEbP5.js";import"./isEqual-BdiiYa5f.js";import"./noop-DX6rZLP_.js";import"./merge-CCPnLMoR.js";import"./_initCloneObject-DaAH_7Pj.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-CYQ77buy.js";import"./inputBaseClasses-BSYFsfzv.js";import"./calculateFriendlyFileSize-C5Z4DbWG.js";import"./CheckCircleTwoTone-BjTNRj81.js";import"./InfoTwoTone-Dm6rZBIc.js";import"./useMutation-BLBDAaI6.js";import"./dayjs.min-pJYmqCac.js";import"./chunk-AYJ5UCUI-py0OTTT6.js";import"./cloneDeep-aIiF9cuR.js";import"./Skeleton-CXBbRm57.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BGXwziqf.js";import"./Backdrop-C_78sV1-.js";import"./LinearProgress-CEdgfN5D.js";import"./uniq-CsdGv1DP.js";import"./Plot-BZ5JQ4LT.js";import"./index-Chjiymov.js";import"./_createAggregator-6FiJkhDu.js";import"./_baseEach-BSxXaLPH.js";import"./_baseIteratee-DZUc_okL.js";import"./_baseGet-pEzMfMe2.js";import"./isSymbol-pOBVduix.js";import"./toString-APlpq5bG.js";import"./hasIn-DJn8Dr58.js";import"./_baseOrderBy-Dvf_DX6t.js";import"./_baseMap-DZdXuC-E.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Mo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Mo as __namedExportsOrder,Ko as default};
