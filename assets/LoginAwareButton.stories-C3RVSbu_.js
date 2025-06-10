import{j as m}from"./jsx-runtime-CS37V5lN.js";import{E as l}from"./ExitToApp-QaCvUZaP.js";import{L as s}from"./LoginAwareButton-DA3a2sAU.js";import"./index-DdzRxeSk.js";import"./iframe-BOZSKX5l.js";import"./createTheme-CR9THI1O.js";import"./createSvgIcon-BE3HpIpN.js";import"./createSvgIcon-Cy3M0oRn.js";import"./DefaultPropsProvider-ChG9Xmy4.js";import"./createChainedFunction-BO_9K8Jh.js";import"./debounce-Be36O1Ab.js";import"./isMuiElement-BZEXNLTH.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useForkRef-CtSJcFnl.js";import"./useEventCallback-DbhNrUuN.js";import"./useId-RCcAWbNZ.js";import"./useControlled-f1W5YVsK.js";import"./useIsFocusVisible-CEj16bKV.js";import"./useTimeout-cXhUpJPS.js";import"./useFiles-nCEVGU3J.js";import"./VerificationSubmission-DeH3Sb8D.js";import"./SynapseConstants-DbAN7IPq.js";import"./OrientationBanner-BGIXc6-x.js";import"./index-BlpDHKi_.js";import"./spreadSx-CwcO6WA9.js";import"./react-3-f0XNzf.js";import"./FullWidthAlert-B3fYGMzC.js";import"./Alert-BuinrxqA.js";import"./resolveComponentProps-fseXx763.js";import"./isHostComponent-DVu5iVWx.js";import"./Close-B9pOG7I_.js";import"./IconButton-Ba5y5_K0.js";import"./ButtonBase-DcwIhz1L.js";import"./TransitionGroupContext-BI1G8zvG.js";import"./Paper-BfwhD1b8.js";import"./Stack-D4qOJMCx.js";import"./getThemeProps-DroptayW.js";import"./useTheme-DkNM2JnN.js";import"./Box-BYDiuRWq.js";import"./AlertTitle-9xKonIV6.js";import"./Typography-B0ESBYIA.js";import"./useTheme-B6Rf6ZZj.js";import"./Grow-BJ--7Xr6.js";import"./index-Cy4mvxM5.js";import"./index-Cygla1YP.js";import"./utils-BPYN7cSU.js";import"./ClickAwayListener-B7k27fd4.js";import"./Tooltip-CEz73Juq.js";import"./index-B0u4QlSt.js";import"./Popper-DyWIoeAe.js";import"./Button-DTd4ve-o.js";import"./fetchWithExponentialTimeout-CXmnpl-T.js";import"./StringUtils-DnD65nWI.js";import"./useQuery-NR50Arvx.js";import"./utils-CR7CrQFQ.js";import"./Link-B7xkTvBp.js";import"./Collapse-BT_qVaSh.js";import"./isNil-BHGvz6YE.js";import"./_Uint8Array-DzUf22Yk.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-SlbhEa29.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-DDp_qU6j.js";import"./_getTag-_uZbXcVO.js";import"./tinycolor-Begke6kS.js";import"./Fade-BXSnEVoc.js";import"./Skeleton-BOisPi-e.js";import"./inputBaseClasses-BORHXMtI.js";import"./calculateFriendlyFileSize-BpxDealy.js";import"./CheckCircleTwoTone-ERl8wijJ.js";import"./InfoTwoTone-DdRKTxQh.js";import"./useMutation-BHf6hDSW.js";import"./isEqual-Lg1cd88a.js";import"./dayjs.min-CZjcVCTg.js";import"./chunk-AYJ5UCUI-DwIU-kyH.js";import"./cloneDeep-DF3ifZuQ.js";import"./_initCloneObject-BgugVHgc.js";import"./merge-Dxt2MiEc.js";import"./identity-DKeuBCMA.js";const Oo={title:"UI/LoginAwareButton",component:s,parameters:{backgrounds:{default:"Challenge Header",values:[{name:"Challenge Header",value:"#3E68AA"}]}},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={args:{isAuthenticated:!1,children:"Register for this Challenge",to:"/pathName?key=value#fragment",href:"",disableElevation:!0,variant:"contained",color:"secondary",sx:{color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"white"},":active":{color:"white"},":visited":{color:"white"}},replace:!1}},r={args:{isAuthenticated:!0,children:"Leave Challenge",onClick:()=>{alert("Leave Challenge Clicked")},endIcon:m.jsx(l,{}),variant:"outlined",sx:{borderColor:"white",color:"white",fontSize:"1.12em",textTransform:"none",padding:"4px 18px",fontWeight:400,":hover":{color:"#172430",borderColor:"#172430"}},replace:!1}};var t,e,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    isAuthenticated: false,
    children: 'Register for this Challenge',
    to: '/pathName?key=value#fragment',
    href: '',
    disableElevation: true,
    variant: 'contained',
    color: 'secondary',
    sx: {
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': {
        color: 'white'
      },
      ':active': {
        color: 'white'
      },
      ':visited': {
        color: 'white'
      }
    },
    replace: false
  }
}`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};var n,p,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isAuthenticated: true,
    children: 'Leave Challenge',
    onClick: () => {
      alert('Leave Challenge Clicked');
    },
    endIcon: <ExitToAppIcon />,
    variant: 'outlined',
    sx: {
      borderColor: 'white',
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': {
        color: '#172430',
        borderColor: '#172430'
      }
    },
    replace: false
  }
}`,...(a=(p=r.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const Uo=["Register","Leave"];export{r as Leave,o as Register,Uo as __namedExportsOrder,Oo as default};
