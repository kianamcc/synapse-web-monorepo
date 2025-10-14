import{T as p}from"./ThemesPlot-v1Hn6FSe.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-DHh7ohVA.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-h_7EWzLA.js";import"./OrientationBanner-Dx-xLkkA.js";import"./index-COEABuGo.js";import"./index-CqkHQv7x.js";import"./iframe-BgwGFO8A.js";import"./spreadSx-CwcO6WA9.js";import"./react-DxvTb9cq.js";import"./FullWidthAlert-PvUSTn7z.js";import"./Alert-BaA8or5r.js";import"./createTheme-DvYKiu1i.js";import"./DefaultPropsProvider-7vp5Xg1U.js";import"./useSlot-DEhbeWXQ.js";import"./useForkRef-DcEMbDda.js";import"./createSimplePaletteValueFilter-DaZ5Yv0h.js";import"./createSvgIcon-xRD0VMrj.js";import"./Close-D2Pcfetn.js";import"./IconButton-C4TIHZyt.js";import"./useTimeout-uliFliSc.js";import"./ButtonBase-e0UzDey_.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-B8_AL_Fq.js";import"./Paper-Bv7lETL1.js";import"./useTheme-DcxGxVMb.js";import"./useTheme-zcMKTfSN.js";import"./Stack-BqfwOgfF.js";import"./useThemeProps-Cf4wgzpW.js";import"./getThemeProps-sRjEXcdv.js";import"./extendSxProp-DtYjKP0k.js";import"./Box-CzGTAvbF.js";import"./AlertTitle-DAlWK_02.js";import"./Typography-fLt1zesl.js";import"./index-xaCPz-JY.js";import"./ClickAwayListener-DnQUb8HH.js";import"./getReactElementRef-C8AieGDO.js";import"./index-BfHw4MxA.js";import"./index-CdBb3X1w.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-ZrcNPb6n.js";import"./Tooltip-DFYygHVR.js";import"./index-DbzZg3-5.js";import"./useControlled-CFGJwztc.js";import"./Popper-yYY1hnWk.js";import"./Button-DazhXTx4.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-DlzHH4w5.js";import"./QueryClientProvider-EftEu6F7.js";import"./Link-Bx8Jvr9M.js";import"./Collapse-BZlk0Ykt.js";import"./_baseUniq-DSJGB-01.js";import"./_Uint8Array-V8Hqk8-a.js";import"./isArray-B_6GUJS7.js";import"./_getTag-BDrzMSis.js";import"./isEqual-ChV2ouiR.js";import"./noop-DX6rZLP_.js";import"./merge-C3l7-ucn.js";import"./_initCloneObject-Cqqx2oxm.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-bYr3BlVk.js";import"./inputBaseClasses-DfP0rQ3S.js";import"./calculateFriendlyFileSize-Cm4JOWCO.js";import"./CheckCircleTwoTone-DY5SAgNm.js";import"./InfoTwoTone-EeJ79Gmj.js";import"./useMutation-BtbqWamg.js";import"./dayjs.min-qBh4lvqk.js";import"./chunk-AYJ5UCUI-UY3Jsjzw.js";import"./cloneDeep-D4nP9Fhn.js";import"./Skeleton-Byv5D2DM.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-9GdNVsg6.js";import"./Backdrop-Clmc0NfY.js";import"./LinearProgress-CIl1aJBV.js";import"./uniq-DYtjhndM.js";import"./Plot-DT6wenut.js";import"./index-Chjiymov.js";import"./_createAggregator-CeYhXz15.js";import"./_baseEach-rfuqpphk.js";import"./_baseIteratee-BqCLeccT.js";import"./_baseGet-Dy0QpRvm.js";import"./isSymbol-BZj08at1.js";import"./toString-5BS_zcgi.js";import"./hasIn-7m-6P6dd.js";import"./_baseOrderBy-REXZLWkt.js";import"./_baseMap-84LLTeq1.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
