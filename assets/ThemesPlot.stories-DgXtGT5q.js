import{T as p}from"./ThemesPlot-tuaLsVOA.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BbJ5o2Ed.js";import"./VerificationSubmission-NmfK1W18.js";import"./SynapseConstants-Ygip4hFC.js";import"./OrientationBanner-BPtaqrpe.js";import"./index-CergElHO.js";import"./index-sk6gXDvC.js";import"./iframe-_K4D7cYy.js";import"./spreadSx-CwcO6WA9.js";import"./react-CKJV6Ks4.js";import"./FullWidthAlert-B0SFUulU.js";import"./Alert-BdbA0TB7.js";import"./createTheme-CrkgGHcI.js";import"./DefaultPropsProvider-BRXhGtBW.js";import"./useSlot-BG5G-iVz.js";import"./useForkRef-D0BMzfT8.js";import"./createSimplePaletteValueFilter-TyKM-CfR.js";import"./createSvgIcon-CtdiqD4i.js";import"./Close-Bu7-9AnV.js";import"./IconButton-DNmOnto9.js";import"./useTimeout-CIVHDma7.js";import"./ButtonBase-CyKfT1Wa.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-VIv6_Kop.js";import"./Paper-B33spbNN.js";import"./useTheme-CeqTy89F.js";import"./useTheme-CKLgr9Xs.js";import"./Stack-DxppTaJ1.js";import"./extendSxProp-B5fFeT4X.js";import"./getThemeProps-CIDrLfBX.js";import"./Box-D_kLBftC.js";import"./AlertTitle-BY8ZzEDY.js";import"./Typography-Dqy4yjFQ.js";import"./index-Ci4Vbdfq.js";import"./ClickAwayListener-B49HXzSs.js";import"./getReactElementRef-D_i8xeIM.js";import"./index-sQxW26gI.js";import"./index-C0sWEppT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-Ccy6EnHD.js";import"./Tooltip-QkmoIlKT.js";import"./index-Dmv2LpPJ.js";import"./useControlled-R0AQnnLf.js";import"./Popper-CtUJ7Q7C.js";import"./Button-CCbz6eS3.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-Dsx1COFf.js";import"./useQuery-aKKXjVSr.js";import"./QueryClientProvider-BK-Mh5RA.js";import"./Link-C1F0j2id.js";import"./Collapse-B2qMB9TZ.js";import"./_baseUniq-DiN75sTS.js";import"./_Uint8Array-Cp--bUx5.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DgxErohx.js";import"./isArray-Dxzbedgu.js";import"./_getTag-UdgsmegY.js";import"./isEqual-R3OPMgEk.js";import"./merge-Dc0N-UH6.js";import"./_initCloneObject-DKyLWHR1.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-nJPjkcgY.js";import"./inputBaseClasses-HU3PdiHJ.js";import"./calculateFriendlyFileSize-CnohUo3x.js";import"./CheckCircleTwoTone-B6wjqc_X.js";import"./InfoTwoTone-ZvyGG8U-.js";import"./useMutation-DAbwO7YE.js";import"./dayjs.min-kJlIbqmb.js";import"./chunk-AYJ5UCUI-tBxPaLzm.js";import"./cloneDeep-wsABOJ5h.js";import"./Skeleton-Bl3E-zaC.js";import"./SqlFunctions-CqOxgBqv.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-HydKWxE9.js";import"./Backdrop-DL1c8HWq.js";import"./LinearProgress-Bm4JRtub.js";import"./uniq-B8Nt6J8d.js";import"./Plot-CEsX3YWZ.js";import"./index-Chjiymov.js";import"./_createAggregator-BRZv84fz.js";import"./_baseEach-mGXkb3fN.js";import"./_baseIteratee-CWN06YQ2.js";import"./_baseGet-ZnklMs3W.js";import"./isSymbol-C8UmZvhE.js";import"./toString-BDl8Sf84.js";import"./hasIn-CIRDx-Bt.js";import"./_baseOrderBy-Dex0YgLM.js";import"./_baseMap-DsZG5eDb.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
