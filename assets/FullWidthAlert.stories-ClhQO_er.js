import{ax as a,r as i,j as r}from"./iframe-BB1CyglU.js";import{S as c}from"./SynapseNavDrawer-DXq13Yaq.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-B8_zxwW8.js";import"./useInfiniteQuery-hdDrux36.js";import"./useDownloadList-BsM4Cg_3.js";import"./waitForAsyncResult-vZXU6LSu.js";import"./useUserBundle-Bf-9hfkn.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-30WgLyBB.js";import"./ConfirmationDialog-c8z7MNMM.js";import"./DialogBase-ZmMylcay.js";import"./Close-Bm3BYI87.js";import"./HelpPopover-DpOHdoba.js";import"./MarkdownPopover-DUEIEIHd.js";import"./LightTooltip-B9cGyM6Q.js";import"./MarkdownSynapse-Bp46o5vr.js";import"./SkeletonButton-q-Dp6RFE.js";import"./SkeletonInlineBlock-dhIvV08s.js";import"./SkeletonTable-EsMLBsV_.js";import"./SkeletonParagraph-CfPPR8eC.js";import"./RadioGroup-CGxlf66p.js";import"./Radio-u0ArbEzc.js";import"./SwitchBase-DBcCC2Ae.js";import"./FormGroup-BzV2Oe0k.js";import"./FormControlLabel-AsYqHmfp.js";import"./Chip-CF5f4rXb.js";import"./SynapseHomepageNavBar-hJIxiTSk.js";import"./SageResourcesPopover-DSrRLYwY.js";import"./Grid-CDu8w-CH.js";import"./index-BLt8cigd.js";import"./MenuItem-ChUmjrmC.js";import"./UserBadge-CHe7Nhbm.js";import"./Card-M3Ee8JJT.js";import"./searchDefaults-NWoNZnl9.js";import"./Slide-CSZZFwoP.js";import"./InputAdornment-Chw6QwaX.js";import"./listItemButtonClasses-Bn9ypA_r.js";import"./Badge-CwjhxnrB.js";import"./usePreviousProps-ZC0xOhlJ.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    show: true,
    title: 'Package has been downloaded',
    description: 'The files contained in this zip file have been removed from your list.',
    isGlobal: false
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const V=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,V as __namedExportsOrder,Q as default};
