import{ax as a,r as i,j as r}from"./iframe-BO8yZwbi.js";import{S as c}from"./SynapseNavDrawer-Cy26TyHa.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BX8H94t-.js";import"./useInfiniteQuery-CLrbgs3-.js";import"./useDownloadList-Df8ZzufJ.js";import"./waitForAsyncResult-BzI7v0OA.js";import"./useUserBundle-D6W7YJ3k.js";import"./CreateProjectModal-BzDzOPci.js";import"./ConfirmationDialog-BhoxDMnX.js";import"./DialogBase-C85pq0MZ.js";import"./Close-BzejB7Wi.js";import"./HelpPopover-fFTFNAOq.js";import"./MarkdownPopover-Dp1_UHGA.js";import"./LightTooltip-NUD2olvk.js";import"./MarkdownSynapse-BvDWhdGZ.js";import"./SkeletonButton-BjMHDMih.js";import"./SkeletonInlineBlock-DsdOdTux.js";import"./SkeletonTable-pZFOgUxM.js";import"./SkeletonParagraph-B75rYAhF.js";import"./SynapseHomepageNavBar-x33Rxgpf.js";import"./SageResourcesPopover-Dtb0jOc-.js";import"./Grid-CNkvGOgJ.js";import"./index-DR8sCWIq.js";import"./MenuItem-CbpqHvkr.js";import"./UserBadge-DUaTP9cc.js";import"./Card-BK0RveQD.js";import"./Chip-CHXpsjrm.js";import"./searchDefaults-ab_BoZXk.js";import"./Slide-Bv8VEUJm.js";import"./InputAdornment-BQH2H1uy.js";import"./listItemButtonClasses-DolHrTL5.js";import"./Badge-I519q5Ci.js";import"./usePreviousProps-D3abc4KG.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["DownloadListPackageCreation","SuccessAlertWithPrimaryButtonOnly","SynapseNavDrawerIsShowing"];export{t as DownloadListPackageCreation,e as SuccessAlertWithPrimaryButtonOnly,o as SynapseNavDrawerIsShowing,q as __namedExportsOrder,U as default};
