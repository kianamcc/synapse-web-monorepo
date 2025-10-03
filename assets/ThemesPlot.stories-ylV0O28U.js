import{T as p}from"./ThemesPlot-CfBaph46.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DsV7Uqwg.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DL5YhH4S.js";import"./OrientationBanner-mORNTher.js";import"./index-CP2flBOM.js";import"./index-iHqCGgSD.js";import"./iframe-B7lNEjCA.js";import"./spreadSx-CwcO6WA9.js";import"./react-C8gp6qo_.js";import"./FullWidthAlert-hDDl8tGl.js";import"./Alert-Blqd_fNk.js";import"./createTheme-DVjZoLcM.js";import"./DefaultPropsProvider-Cyw12EVv.js";import"./useSlot-Co92EhaQ.js";import"./useForkRef-QOk-agIc.js";import"./createSimplePaletteValueFilter-BiBnMtNg.js";import"./createSvgIcon-zcikS4QR.js";import"./Close-DTFq5PlQ.js";import"./IconButton-MRX9Tl10.js";import"./useTimeout-BDErO9dO.js";import"./ButtonBase-CpibtBKw.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-CSoU-aEZ.js";import"./Paper-l2vU89bV.js";import"./useTheme-DdAf-Ccq.js";import"./useTheme-BpTHkjke.js";import"./Stack-D4AYLr5g.js";import"./useThemeProps-BtqvP0WI.js";import"./getThemeProps-D1SG0DsT.js";import"./extendSxProp-C7d5w1mF.js";import"./Box-CDAuR3Sa.js";import"./AlertTitle-DxXMQd8X.js";import"./Typography-DBnwRkQ7.js";import"./index--3ZaasC4.js";import"./ClickAwayListener-DrGahT-8.js";import"./getReactElementRef-Deaobhwy.js";import"./index-CuVSgrUP.js";import"./index-BqdGDFpd.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-D_bI5i2G.js";import"./Tooltip-lUCmHMJ3.js";import"./index-Do8mbRFX.js";import"./useControlled-CTTwHfL4.js";import"./Popper-DbiyN3lk.js";import"./Button-D1Zc7cY5.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DQoxcdop.js";import"./QueryClientProvider-DZo2I7_f.js";import"./Link-8oHfVMM1.js";import"./Collapse-PeaT3Cz9.js";import"./_baseUniq-BioGUUFG.js";import"./_Uint8Array-4Fua8vo1.js";import"./isArray-BVc5tk0h.js";import"./_getTag-DMNH3Rat.js";import"./isEqual-DVzAcMpg.js";import"./noop-DX6rZLP_.js";import"./merge-DN43w6rZ.js";import"./_initCloneObject-D074hTky.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BrjpvEaI.js";import"./inputBaseClasses-CZKuk046.js";import"./calculateFriendlyFileSize-ChX25_t7.js";import"./CheckCircleTwoTone-Ck5csnvz.js";import"./InfoTwoTone-C4STztOF.js";import"./useMutation-BNmK4RdG.js";import"./dayjs.min-4LP4YV8J.js";import"./chunk-AYJ5UCUI-C7xelVKS.js";import"./cloneDeep-C13AQJD-.js";import"./Skeleton-BOqcwHCi.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-DFCQZmux.js";import"./Backdrop-Citfx5Ol.js";import"./LinearProgress-DoN5Jcz6.js";import"./uniq-DJiL94xh.js";import"./Plot-BYGDHXe_.js";import"./index-Chjiymov.js";import"./_createAggregator-DVhcgUur.js";import"./_baseEach-4fkoWLAb.js";import"./_baseIteratee-mN2FbXo6.js";import"./_baseGet-DEXD5GjL.js";import"./isSymbol-DxIswJ5e.js";import"./toString-B7qVd2uL.js";import"./hasIn-BDM_Ej70.js";import"./_baseOrderBy-D7aiz4Xb.js";import"./_baseMap-DkBRSrxC.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
