import{T as p}from"./ThemesPlot-BD8UkOKk.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-6UDrmTYG.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-hypBLRKL.js";import"./OrientationBanner-D-Ad_KzJ.js";import"./index-DO9i5fSP.js";import"./index-0Exjkr72.js";import"./iframe-DaXup4WN.js";import"./spreadSx-CwcO6WA9.js";import"./react-CP4ZqcKH.js";import"./FullWidthAlert-tLGyCqCx.js";import"./Alert-CoPbwJdQ.js";import"./createTheme-0xQbh0hV.js";import"./DefaultPropsProvider-Bvki0pxK.js";import"./useSlot-Dq0xnqmg.js";import"./useForkRef-vAoaxSvE.js";import"./createSimplePaletteValueFilter-Dn2ZSDDm.js";import"./createSvgIcon-D_tiKqbD.js";import"./Close-Cpm6LQZy.js";import"./IconButton-DjNjSMkw.js";import"./useTimeout-DxKu314J.js";import"./ButtonBase-CxDf0Iya.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BrXv9hhK.js";import"./Paper-D8dnleYW.js";import"./useTheme-D8-A-0a-.js";import"./useTheme-CtlMRJLD.js";import"./Stack-DRTbJTt6.js";import"./useThemeProps-C1t7O8fM.js";import"./getThemeProps-CRJRiPRc.js";import"./extendSxProp-DKGbTOnE.js";import"./Box-CFRP72jt.js";import"./AlertTitle-Cez2UsjB.js";import"./Typography-CCOQQgSX.js";import"./index-CbCbsN5e.js";import"./ClickAwayListener-DWpjaqTE.js";import"./getReactElementRef-CCy5tafl.js";import"./index-CQx7vtrI.js";import"./index-Bo63NWas.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-a2S7IfBI.js";import"./Tooltip-BNN4uyZR.js";import"./index-DGgpv3HQ.js";import"./useControlled-DViJgbiZ.js";import"./Popper-EPaPs2kP.js";import"./Button-iINO5mWw.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-lQ2tabsY.js";import"./QueryClientProvider-BqxA2MMk.js";import"./Link-BZBSuM24.js";import"./Collapse-BuJTwuq3.js";import"./_baseUniq-D2qgl31R.js";import"./_Uint8Array-Bup5ZD9h.js";import"./isArray-PqDzEjBo.js";import"./_getTag-DAcmkE1f.js";import"./isEqual-DTMJ7tsS.js";import"./noop-DX6rZLP_.js";import"./merge-eG4gq0oP.js";import"./_initCloneObject-w3_8_Tro.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-BoYFynpn.js";import"./inputBaseClasses-Cp73c6Jl.js";import"./calculateFriendlyFileSize-dtY2LNqn.js";import"./CheckCircleTwoTone-CBnB5HgO.js";import"./InfoTwoTone-C0kEYjXG.js";import"./useMutation-DhZrwB6t.js";import"./dayjs.min-AYuUP0Eh.js";import"./chunk-AYJ5UCUI-CCUScnZb.js";import"./cloneDeep-C09cW0zA.js";import"./Skeleton-mTacaXMJ.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-B8V2JRyW.js";import"./Backdrop-Dm12SVZr.js";import"./LinearProgress-DBxT16AH.js";import"./uniq-CZqlj2Y0.js";import"./Plot-V9EjCMim.js";import"./index-Chjiymov.js";import"./_createAggregator-d4BmfDWe.js";import"./_baseEach-DvQhkhfJ.js";import"./_baseIteratee-BtREczOz.js";import"./_baseGet-BQnZJrPN.js";import"./isSymbol-Dk6RgkrU.js";import"./toString-BmMu2Lx8.js";import"./hasIn-RHKp4duM.js";import"./_baseOrderBy-yp8LBEOC.js";import"./_baseMap-DNtaGwgK.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
