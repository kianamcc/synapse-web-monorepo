import{T as p}from"./ThemesPlot-Bnbe5-gs.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-8ATydn8A.js";import"./VerificationSubmission-OWkqLMYZ.js";import"./SynapseConstants-BoFDoI5V.js";import"./OrientationBanner-Bfw4GBS8.js";import"./index-Dxb0ugoE.js";import"./index-BQ0h1q-c.js";import"./iframe-DY59xS4l.js";import"./spreadSx-CwcO6WA9.js";import"./react-DjEuRMZ5.js";import"./FullWidthAlert-Dt7wKjhd.js";import"./Alert-ny1Y1xel.js";import"./createTheme-BlTwNsQ1.js";import"./DefaultPropsProvider-CYP_2Idx.js";import"./useSlot-kVASu-JJ.js";import"./useForkRef-CkhoaXlV.js";import"./createSimplePaletteValueFilter-DWGwy2Im.js";import"./createSvgIcon-Bgf4v-Fl.js";import"./Close-CgY7_8Mf.js";import"./IconButton-DTeuPv0j.js";import"./useTimeout-BUMPYjbI.js";import"./ButtonBase-BJNoKMlW.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BxPHqgfj.js";import"./Paper-DDyf3v9v.js";import"./useTheme-Df8fnDRi.js";import"./useTheme-fVMz0yaA.js";import"./Stack-DZ5v80pT.js";import"./extendSxProp-DoJ1PD9F.js";import"./getThemeProps-BBGYBewf.js";import"./Box-BrZ4r0b2.js";import"./AlertTitle-DGX0T4Jr.js";import"./Typography-CTis9lUB.js";import"./index-CBwPP-8I.js";import"./ClickAwayListener-zrX_7RVQ.js";import"./getReactElementRef-DXMeOMMR.js";import"./index-IwBO8kaU.js";import"./index-BzyuMQfT.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-DGZAZIri.js";import"./Tooltip-jtcVHvVK.js";import"./index-CkYitUbw.js";import"./useControlled-CyVPDa_k.js";import"./Popper-Cnmlk4SK.js";import"./Button-bLnqHRUE.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-C5rFena9.js";import"./useQuery-Bmim-_eg.js";import"./QueryClientProvider-F9634mTY.js";import"./Link-CWjqwdMI.js";import"./Collapse-DzVgfvxm.js";import"./_baseUniq-GXz1Dpxd.js";import"./_Uint8Array-Dc7_fKH3.js";import"./isArray-DsBeDomq.js";import"./_getTag-D0e_6tbm.js";import"./isEqual-DKB0rujn.js";import"./merge-5gUM5Tdf.js";import"./_initCloneObject-CSLOxTWP.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DoJrpD9h.js";import"./inputBaseClasses-TDVyq3ls.js";import"./calculateFriendlyFileSize-H1i4XWH4.js";import"./CheckCircleTwoTone-Cbum7mvg.js";import"./InfoTwoTone-ZmJWrGVC.js";import"./useMutation-D9nSv9vL.js";import"./dayjs.min-D8karIbq.js";import"./chunk-AYJ5UCUI-lme-Pn3H.js";import"./cloneDeep-HL-fX3rq.js";import"./Skeleton-DumsuiTC.js";import"./SqlFunctions-C8HqQ3uk.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-C_KyVjMh.js";import"./Backdrop-Bc4lrmm2.js";import"./LinearProgress-C9RyIhCj.js";import"./uniq-C9p0Czvs.js";import"./Plot-udxekFuo.js";import"./index-Chjiymov.js";import"./_createAggregator-Dm-DYiDC.js";import"./_baseEach-DzSYF0r5.js";import"./_baseIteratee-BCjPZHG7.js";import"./_baseGet-ZLz1wBh-.js";import"./isSymbol-D7jtDlbi.js";import"./toString-zWPRN8Ui.js";import"./hasIn-C9VhUk-h.js";import"./_baseOrderBy-D-0Xofbv.js";import"./_baseMap-CeesR6Tl.js";import"./head-aneRfQQJ.js";const Go={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
