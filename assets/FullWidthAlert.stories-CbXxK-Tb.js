import{at as g,j as e,r as w}from"./iframe-DcJpmp1V.js";import{S as v}from"./SynapseNavDrawer-CdzA3o0G.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DTb6uQc4.js";import"./useInfiniteQuery-Btt3ZcbH.js";import"./useDownloadList-DZ_ynKe6.js";import"./waitForAsyncResult-DlaJOihT.js";import"./CreateProjectModal-RnI9F_SA.js";import"./ConfirmationDialog-DDza5CfY.js";import"./DialogBase-BEjE_oc_.js";import"./Close-Dcx23buO.js";import"./HelpPopover-BE1pk0Q2.js";import"./MarkdownPopover-D3pZUAoK.js";import"./LightTooltip-DLmuU1bJ.js";import"./MarkdownSynapse-Czv-k2yf.js";import"./SkeletonButton-DkRzYKJ9.js";import"./SkeletonInlineBlock-D7vcjj_c.js";import"./SkeletonTable-B6OGgiWA.js";import"./SkeletonParagraph-nIFCADcu.js";import"./SynapseHomepageNavBar-s1JkbrOr.js";import"./SageResourcesPopover-NYwdpYDR.js";import"./Grid-Iy6KwBDK.js";import"./index-Cg17DPBV.js";import"./MenuItem-CbRug303.js";import"./UserBadge-B6L3dVNq.js";import"./Card-BbDWwTKw.js";import"./Chip-C_u6PkYz.js";import"./Slide-DzLDtOjX.js";import"./InputAdornment-DXO18e-r.js";import"./listItemButtonClasses-CCE-ZWi6.js";import"./Badge-BwQ3riMo.js";import"./usePreviousProps-Rd_ujcaK.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Success',
    description: 'Lorem ipsum dolor sit amet',
    primaryButtonConfig: {
      text: 'Accept and Continue',
      onClick: () => alert('Accepted')
    },
    isGlobal: true,
    onClose: undefined
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...SuccessAlertWithPrimaryButtonOnly.args
  },
  render: args => <>
      <SynapseNavDrawer initIsOpen={false} gotoPlace={(href: string) => {
      window.alert(\`Nav bar calling back to change route to \${href}\`);
    }} />
      <FullWidthAlert {...args} />
    </>,
  decorators: [Story => {
    useEffect(() => {
      // SWC applies this class when SynapseNavDrawer is visible
      document.body.classList.add('SynapseNavDrawerIsShowing');
      return () => {
        // ...and removes it when SynapseNavDrawer is not visible
        document.body.classList.remove('SynapseNavDrawerIsShowing');
      };
    }, []);
    return <Story />;
  }]
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const X=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,r as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,X as __namedExportsOrder,V as default};
