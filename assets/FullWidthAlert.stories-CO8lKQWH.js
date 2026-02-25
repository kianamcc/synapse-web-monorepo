import{ay as a,j as r,r as i}from"./iframe-HhNUql8D.js";import{S as c}from"./SynapseNavDrawer-CWmFb7O7.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-zGSNg2jr.js";import"./useInfiniteQuery-DE1A5qVC.js";import"./useDownloadList-D8yDJA4G.js";import"./waitForAsyncResult-D6MYwWvo.js";import"./useUserBundle-B3ONxnuI.js";import"./useSuspenseQuery-DB6yHRv0.js";import"./CreateProjectModal-XatWlgJz.js";import"./ConfirmationDialog-X-q5EAD5.js";import"./DialogBase-CixZag-K.js";import"./Close-DwkMpKYS.js";import"./HelpPopover-HYfG1omk.js";import"./MarkdownPopover-C0XojMIG.js";import"./LightTooltip-N2Yg4ppW.js";import"./MarkdownSynapse-Der_vikg.js";import"./SkeletonButton-CAAREen-.js";import"./SkeletonInlineBlock-Ckp06Ekm.js";import"./SkeletonTable-EUCE1WAM.js";import"./SkeletonParagraph-DMnpDLUG.js";import"./SynapseHomepageNavBar-BYAIp4YD.js";import"./SageResourcesPopover-pek1L23f.js";import"./Grid-DCuy2lUH.js";import"./index-Dr8U68KC.js";import"./MenuItem-CNBBPtb0.js";import"./UserBadge-B8Kzug2j.js";import"./Card-Bz-DCfDS.js";import"./Chip-CfoXnBsJ.js";import"./searchDefaults-DGL-Ub_u.js";import"./Slide-tcjmnEz1.js";import"./InputAdornment-VrKMKYkV.js";import"./listItemButtonClasses-y8ASnlnG.js";import"./Badge-DqqUMVET.js";import"./usePreviousProps-LikoPITP.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,H as __namedExportsOrder,q as default};
