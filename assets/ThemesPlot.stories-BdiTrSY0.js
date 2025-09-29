import{T as p}from"./ThemesPlot-phrGoFTA.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-B2N2HPUY.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-Dgxzyngc.js";import"./OrientationBanner-CM4mQahX.js";import"./index-Ckx9wA1o.js";import"./index-DTNlVjJ7.js";import"./iframe-HyGsmOq6.js";import"./spreadSx-CwcO6WA9.js";import"./react-C-ZrivrO.js";import"./FullWidthAlert-rFqRmBje.js";import"./Alert-8d9H3zz9.js";import"./createTheme-D1BQx7_9.js";import"./DefaultPropsProvider-C_zNEI2X.js";import"./useSlot-D3K8A8w7.js";import"./useForkRef-U0ZDp63e.js";import"./createSimplePaletteValueFilter-cVSg-Kao.js";import"./createSvgIcon-RS-D48a7.js";import"./Close-CvE2AhfC.js";import"./IconButton-pZgQcOFK.js";import"./useTimeout-DtwR2-Vy.js";import"./ButtonBase-36aZ1yix.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-oD9nUD2d.js";import"./Paper-CaF42frr.js";import"./useTheme-f5o2sVxe.js";import"./useTheme-BfaqaQGF.js";import"./Stack-DqCCF0aZ.js";import"./extendSxProp-iklfMelH.js";import"./getThemeProps-vMGdrB_u.js";import"./Box-BgNFQW5j.js";import"./AlertTitle-DbhJsyCT.js";import"./Typography-CdQn_xVC.js";import"./index-ChnvbaPR.js";import"./ClickAwayListener-DoRduBrz.js";import"./getReactElementRef-DwpSRZ2i.js";import"./index-C38Velpb.js";import"./index-DROQPanT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-h00VdCaE.js";import"./Tooltip-CF7TWlNa.js";import"./index-DFvo03aM.js";import"./useControlled-C_0taDzB.js";import"./Popper-CTII9iKp.js";import"./Button-N-1HkUGf.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-NPb0VexC.js";import"./useQuery-BeZx-JBU.js";import"./QueryClientProvider-CqRxmNge.js";import"./Link-B84UpXKP.js";import"./Collapse-D024h2Tt.js";import"./_baseUniq-DEewYuYN.js";import"./_Uint8Array-DPNJR1BB.js";import"./isArray-BNDnJ0cX.js";import"./_getTag-DxTQRKYo.js";import"./isEqual-Dv-V6DIZ.js";import"./merge-NB7svOIH.js";import"./_initCloneObject-DHMeHRbH.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-ByYPi2--.js";import"./inputBaseClasses-V0GV_T2d.js";import"./calculateFriendlyFileSize-C_Xem63m.js";import"./CheckCircleTwoTone-Dp5ZcmDN.js";import"./InfoTwoTone-BTeFVGl3.js";import"./useMutation-B0RPERva.js";import"./dayjs.min-2wFo7hOi.js";import"./chunk-AYJ5UCUI-CW1esgOs.js";import"./cloneDeep-i-w8KGzX.js";import"./Skeleton-BEqAEI4M.js";import"./SqlFunctions-B6aZ8mL4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-d-6ip2R1.js";import"./Backdrop-l3gtyMen.js";import"./LinearProgress-BZXl4Gwg.js";import"./uniq-C6J32P60.js";import"./Plot-ZOFyJUt_.js";import"./index-Chjiymov.js";import"./_createAggregator-BuA11nNI.js";import"./_baseEach-Bm1nLJw7.js";import"./_baseIteratee-M1ODcah4.js";import"./_baseGet-DUVO_pfJ.js";import"./isSymbol-aUcSGGGb.js";import"./toString-Cr7dBLXl.js";import"./hasIn-CYV7qBn0.js";import"./_baseOrderBy-D6XmiL18.js";import"./_baseMap-CwP00p44.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
