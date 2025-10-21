import{T as p}from"./ThemesPlot-Cmc-ndgd.js";import"./jsx-runtime-D_zvdyIk.js";import"./useFiles-BbxVu2DR.js";import"./VerificationSubmission-BDh1zA9f.js";import"./SynapseConstants-DB1U6fCi.js";import"./OrientationBanner-CfcCHA7b.js";import"./index-D-JvkkFQ.js";import"./index-h6wMStlP.js";import"./iframe-BIXzCf__.js";import"./spreadSx-CwcO6WA9.js";import"./react-Dvfkm1q8.js";import"./FullWidthAlert-C3__BrN1.js";import"./Alert-KbHye0zK.js";import"./createTheme-CfvkUd1Z.js";import"./DefaultPropsProvider-D7V8rD5v.js";import"./useSlot-sOD4zP-r.js";import"./useForkRef-Bgjy7c5C.js";import"./createSimplePaletteValueFilter-7MYa4cYr.js";import"./createSvgIcon-BBewBNub.js";import"./Close-vJBs_HBy.js";import"./IconButton-BIC_-n2r.js";import"./useTimeout-qJcADyon.js";import"./ButtonBase-0zocx7gF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DMvTAHSq.js";import"./Paper-BxqOSPyk.js";import"./useTheme-Cw4Zp1rn.js";import"./useTheme-PSCU5VTp.js";import"./Stack-BlHkd8TU.js";import"./useThemeProps-B2dREZbs.js";import"./getThemeProps-C0RGq6ua.js";import"./extendSxProp-CkLeZJqn.js";import"./Box-Dx6_J6VB.js";import"./AlertTitle-fHQYxNHL.js";import"./Typography-TJTmaHAu.js";import"./index-DYWBYB4S.js";import"./ClickAwayListener-BfovIoNr.js";import"./getReactElementRef-Bwbpg52p.js";import"./index-U4jxIuWl.js";import"./index-t59vC1km.js";import"./ownerDocument-DW-IO8s5.js";import"./Grow-wP9co_-j.js";import"./Tooltip-n52PzXnL.js";import"./index-ByPvK6j8.js";import"./useControlled-OG_H38db.js";import"./Popper-BhKXntQR.js";import"./Button-DmjkSNHc.js";import"./fetchWithExponentialTimeout-UV9FrpR8.js";import"./StringUtils-C95LMFI-.js";import"./useQuery-CmubrUzL.js";import"./QueryClientProvider-DEQ_VpcF.js";import"./Link-Kv9iFQ5W.js";import"./Collapse-Q1KoyyE_.js";import"./_baseUniq-aE6oP3PL.js";import"./_Uint8Array-BGr3SjUR.js";import"./isArray-Cn9BbLfk.js";import"./_getTag-1ZzLjjIk.js";import"./isEqual-DeX1HjXm.js";import"./noop-DX6rZLP_.js";import"./merge-JRhW7aR_.js";import"./_initCloneObject-BuVlxAmo.js";import"./identity-DKeuBCMA.js";import"./tinycolor-Begke6kS.js";import"./Fade-DHQD_AfM.js";import"./inputBaseClasses-DhSIyHr7.js";import"./calculateFriendlyFileSize-D9gQBnSg.js";import"./CheckCircleTwoTone-Cmw_kNue.js";import"./InfoTwoTone-14otHSKQ.js";import"./useMutation-AlPt0G_3.js";import"./dayjs.min-Bh9Qzvrd.js";import"./chunk-AYJ5UCUI-C8HEU9Sm.js";import"./cloneDeep-B0NF6IcV.js";import"./Skeleton-CNu0JRel.js";import"./SqlFunctions-B8wRZva4.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-BzEpietQ.js";import"./Backdrop-SCW-muxj.js";import"./LinearProgress-CTLDtvyA.js";import"./uniq-CKX8YqFN.js";import"./Plot-Cz3wzyzv.js";import"./index-Chjiymov.js";import"./_createAggregator-tYZgIzU3.js";import"./_baseEach-WN1wryIn.js";import"./_baseIteratee-CbnCMJ5v.js";import"./_baseGet-DpamE7Y7.js";import"./isSymbol-DAmKeQYL.js";import"./toString-JgrOq2ja.js";import"./hasIn-CM4BkM2-.js";import"./_baseOrderBy-Bq66aKWq.js";import"./_baseMap-Dsd2-p7O.js";import"./head-aneRfQQJ.js";const Ko={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
