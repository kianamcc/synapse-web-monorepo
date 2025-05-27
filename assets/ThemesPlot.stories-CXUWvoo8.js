import{T as p}from"./ThemesPlot-T2_r91gC.js";import"./jsx-runtime-DCJQF7Yu.js";import"./index-D7QECZ8_.js";import"./iframe-CuhiliFp.js";import"./useFiles-BOqix5tm.js";import"./VerificationSubmission-DsgC4t7y.js";import"./SynapseConstants-CdFknnGS.js";import"./OrientationBanner-CC-lZdxv.js";import"./index-D2Bvq6Nc.js";import"./spreadSx-CwcO6WA9.js";import"./react-BJjff2Hm.js";import"./FullWidthAlert-Bj3lD5jg.js";import"./Alert-BsdT6A5s.js";import"./createTheme-CuV6lKby.js";import"./resolveComponentProps-DWeRc3dZ.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DvumXbvd.js";import"./createSvgIcon-B4UMNYvL.js";import"./DefaultPropsProvider-45DiC2R-.js";import"./Close-BXsOQpdh.js";import"./IconButton-Ctyxkzex.js";import"./ButtonBase-BWYPhWny.js";import"./useTimeout-JjV9Y7kR.js";import"./TransitionGroupContext-B5JkxjR-.js";import"./useIsFocusVisible-DI4OcUBX.js";import"./useEventCallback-hxJDok40.js";import"./Paper-DxoJKm8a.js";import"./Stack-B0cdQae2.js";import"./getThemeProps-BSmwECat.js";import"./useTheme-Dt6xohqk.js";import"./Box-CUPEk2R8.js";import"./AlertTitle-Du67j12O.js";import"./Typography-CgQwt_4v.js";import"./useTheme-yUrwrjvB.js";import"./Grow-BeOr-5JA.js";import"./index-DSi42yUw.js";import"./utils-DeDVuNU5.js";import"./ClickAwayListener-BC8tckZ8.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DVh9M4NB.js";import"./index-vTdvcokP.js";import"./useControlled-Ct4_TlDh.js";import"./useId-vdcc40Zz.js";import"./Popper-kEzLQScP.js";import"./Button-C36btVIf.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-tNCAfVhp.js";import"./useQuery-nV6OcPaD.js";import"./utils-Cttwrnae.js";import"./Link-ZjbhCfZ0.js";import"./Collapse-BLIS97ot.js";import"./isNil-Dnq5PGVr.js";import"./_Uint8Array-DOpCseV4.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-CFFu1MVA.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-B2Du7X7-.js";import"./_getTag-DRr85OGv.js";import"./tinycolor-Begke6kS.js";import"./Fade-CnF8Do1c.js";import"./Skeleton-B5ZmudJe.js";import"./inputBaseClasses-CGTgXlAI.js";import"./calculateFriendlyFileSize-DHuViXKC.js";import"./CheckCircleTwoTone-Cc67pUZK.js";import"./InfoTwoTone-CzFGxlsS.js";import"./mutation-Dx45ojvb.js";import"./dayjs.min-DxbNjoSh.js";import"./chunk-AYJ5UCUI-Npvsl4CZ.js";import"./cloneDeep-B0BmWEKv.js";import"./_initCloneObject-C8LZoPvu.js";import"./isEqual-BkipORyh.js";import"./merge-vnkNN72-.js";import"./identity-DKeuBCMA.js";import"./SqlFunctions-C1gwNAz5.js";import"./unCamelCase-ZiU_emRy.js";import"./LoadingScreen-CjP0OZue.js";import"./Backdrop-Dv63Vw8n.js";import"./LinearProgress-C-V49UFU.js";import"./noop-DX6rZLP_.js";import"./uniq-DaTpLJmx.js";import"./_arrayIncludesWith-DtPV-o4u.js";import"./_baseIndexOf-rBnIfvEs.js";import"./Plot-BJAQ4PG5.js";import"./index-BzJcxkx6.js";import"./_createAggregator-CXhA3uX6.js";import"./_baseEach-D78mCbN3.js";import"./_baseIteratee-D0oFQmzg.js";import"./_baseGet-B1nJZODP.js";import"./isSymbol-BVVirvqx.js";import"./toString-CC6ZqTfl.js";import"./hasIn-CBlcAGvV.js";import"./_baseOrderBy-BO-Z_YTs.js";import"./_baseMap-DhnMV7i_.js";import"./head-aneRfQQJ.js";const Ro={title:"Home Page/ThemesPlot",component:p},o={args:{onPointClick:m=>{console.log(m.event)},topBarPlot:{entityId:"syn21641485",xField:"totalCount",yField:"groupBy",groupField:"consortium",colors:{CSBC:"rgba(64,123,160, 1)","PS-ON":"rgba(91,176,181,1)",ICBP:"rgba(197, 191, 223, 1)",TEC:"rgba(156, 196, 233, 1)"},whereClause:"totalCount is not NULL"},sideBarPlot:{entityId:"syn21649281",xField:"totalCount",yField:"theme",groupField:"consortium",countLabel:"grants",plotStyle:{backgroundColor:"#f5f9fa"},colors:{CSBC:"#1c76af","PS-ON":"#5bb0b5",ICBP:"#9cc4e9",TEC:"#c5bfdf"}},dotPlot:{entityId:"syn21639584",xField:"totalCount",yField:"theme",groupField:"groupBy",infoField:"themeDescription",whereClause:"groupBy IN ('publications', 'tools', 'datasets')",markerSymbols:{tools:"y-down",datasets:"diamond-x",publications:"circle"},plotStyle:{markerLine:"rgba(0, 0, 0,1)",markerFill:"rgba(255, 255, 255,1)",markerSize:11,backgroundColor:"#f5f9fa"}}}};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Vo=["ThemesPlotDemo"];export{o as ThemesPlotDemo,Vo as __namedExportsOrder,Ro as default};
