import{j as a}from"./jsx-runtime-CfniUVqD.js";import{m as P}from"./mockWiki-DiBhlaV-.js";import{M as x}from"./MarkdownSynapse-W90RTD4a.js";import{d as s}from"./ToastMessage-DaYBkerc.js";import{R as n,a as t}from"./RequirementItem-UKy8_V3Z.js";import{P as O}from"./Paper-D0_uR9Sy.js";import"./index-w8r01unF.js";import"./iframe-CUCSdczr.js";import"./mock_user_profile-Bg50HGfI.js";import"./mock_file_handle-C2NjfX48.js";import"./VerificationSubmission-DHPhgAH7.js";import"./useFiles-BK3Gh0_l.js";import"./SynapseConstants-2Xj6Yp9b.js";import"./OrientationBanner-TpvFF3Ts.js";import"./index-BSHGj6el.js";import"./spreadSx-CwcO6WA9.js";import"./react-DlNSOGk7.js";import"./FullWidthAlert-BBqcXFew.js";import"./Alert-Cv2aYRot.js";import"./createTheme-Dy24wF_1.js";import"./resolveComponentProps-ma8JMEbU.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D7k89ytA.js";import"./createSvgIcon-l6KdUt_U.js";import"./DefaultPropsProvider-CbfxmOUo.js";import"./Close-BFG1LR7b.js";import"./IconButton-URRSVn69.js";import"./ButtonBase-CXLjw9mJ.js";import"./useTimeout-Bu1cnb2B.js";import"./TransitionGroupContext-DqohVvaO.js";import"./useIsFocusVisible-hjtORhQC.js";import"./useEventCallback-CFNiwpIz.js";import"./Stack-B5FK2opb.js";import"./getThemeProps-CUgjtIi1.js";import"./useTheme-D-9dB31D.js";import"./Box-BkoKjff6.js";import"./AlertTitle-BL4ZbCob.js";import"./Typography-Db2qQfaM.js";import"./useTheme-D5QJEr0B.js";import"./Grow-BRrJzSUm.js";import"./index-Dtn10zyK.js";import"./utils-D80l6d7_.js";import"./ClickAwayListener-CvxkHeNi.js";import"./ownerDocument-DW-IO8s5.js";import"./Tooltip-DxsSs5eW.js";import"./index-CYfQTFsZ.js";import"./useControlled-0G6SdZ8L.js";import"./useId-DskmTTOE.js";import"./Popper-VDjvMyAP.js";import"./Button-DcA6Wnl8.js";import"./fetchWithExponentialTimeout-Cpvpsfq8.js";import"./StringUtils-Bj0SG9ce.js";import"./useQuery-CT-b_ugC.js";import"./utils-Dycl1YZq.js";import"./Link-Cjca69dE.js";import"./Collapse-C36U9yxB.js";import"./isNil-CgpPL_Iw.js";import"./_Uint8Array-BuM38brZ.js";import"./_baseTimes-36S_kd0L.js";import"./isObjectLike-DD2yD6S-.js";import"./isArray-Dxzbedgu.js";import"./_baseIsEqual-E8uLXCBr.js";import"./_getTag-WOUCB7X1.js";import"./tinycolor-Begke6kS.js";import"./Fade-DH2_TrMQ.js";import"./Skeleton-CvR3Skml.js";import"./inputBaseClasses-DljKtXei.js";import"./calculateFriendlyFileSize-CMfGmUEf.js";import"./CheckCircleTwoTone-BQWHkcPQ.js";import"./InfoTwoTone-CKODhZkq.js";import"./useMutation-BPptyNQx.js";import"./isEqual-C71nV6ON.js";import"./dayjs.min-CMsY32ZI.js";import"./chunk-AYJ5UCUI-DQQgLh9r.js";import"./cloneDeep-Q3oOVsTG.js";import"./_initCloneObject-CzY22ryU.js";import"./merge-Cj45Y_uR.js";import"./identity-DKeuBCMA.js";import"./SkeletonButton-CC-kO4fp.js";import"./SkeletonInlineBlock-DTX6z7T8.js";import"./SkeletonTable-BJ76Wpba.js";import"./times-D7LY3lwe.js";import"./toInteger-dNgW8dgx.js";import"./isSymbol-C_ONlG-P.js";import"./SkeletonParagraph-DPCIY1Yd.js";import"./uniqueId-CEuX8h5x.js";import"./toString-DlXGyx2c.js";import"./CSSTransition-DYlSVDHn.js";import"./ConditionalWrapper-pp6DUwdu.js";import"./LockTwoTone-DSkcg79w.js";import"./Avatar-BqQTyVRu.js";const dr={title:"Governance/Data Access Request Flow/Requirements/RequirementItem",component:n,argTypes:{status:{control:"select",options:[...new Set(Object.values(t))]}},tags:["autodocs"],render:A=>a.jsx(O,{sx:{p:5,margin:"auto",maxWidth:"700px"},children:a.jsx(n,{...A,children:a.jsx(x,{markdown:P.markdown})})})},r={args:{status:t.COMPLETE,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},o={args:{status:t.PENDING,actions:[{variant:"outlined",children:"Learn More",onClick:()=>{s("Learn More clicked")}}]}},e={args:{status:t.LOADING,actions:[]}},i={args:{status:t.COMPLETE,actions:[]}},m={args:{status:t.LOCKED,actions:[{variant:"outlined",children:"Accept terms",onClick:()=>{s("Accept terms clicked")}}]}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.PENDING,
    actions: [{
      variant: 'outlined',
      children: 'Learn More',
      onClick: () => {
        displayToast('Learn More clicked');
      }
    }]
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var L,k,C;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOADING,
    actions: []
  }
}`,...(C=(k=e.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var M,E,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.COMPLETE,
    actions: []
  }
}`,...(R=(E=i.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,I,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: RequirementItemStatus.LOCKED,
    actions: [{
      variant: 'outlined',
      children: 'Accept terms',
      onClick: () => {
        displayToast('Accept terms clicked');
      }
    }]
  }
}`,...(q=(I=m.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const ur=["Complete","Pending","Loading","NoActions","Locked"];export{r as Complete,e as Loading,m as Locked,i as NoActions,o as Pending,ur as __namedExportsOrder,dr as default};
