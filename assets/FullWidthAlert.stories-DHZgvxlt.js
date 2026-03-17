import{aA as a,j as r,r as i}from"./iframe-I8dsMSSM.js";import{S as c}from"./SynapseNavDrawer-B-7dN7JJ.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-ChXleHo2.js";import"./useInfiniteQuery-ByZ3F9Pg.js";import"./useDownloadList-CI7XRbzT.js";import"./waitForAsyncResult-TOSMjQOK.js";import"./useUserBundle-BguAd_7C.js";import"./CreateProjectModal-DcoLP7hI.js";import"./ConfirmationDialog-DLGB6ehz.js";import"./DialogBase-mHGOMstB.js";import"./Close-D1LcmWDM.js";import"./HelpPopover-BxQCnu74.js";import"./MarkdownPopover-Hp3QtlvD.js";import"./LightTooltip-DuvS2K_c.js";import"./MarkdownSynapse-CuDNblsf.js";import"./SkeletonButton-CmYn4uiY.js";import"./SkeletonInlineBlock-C0iISjKy.js";import"./SkeletonTable-DFj9MMPK.js";import"./SkeletonParagraph-CBxS9HL2.js";import"./SynapseHomepageNavBar-C0UajoO2.js";import"./SageResourcesPopover-CNKqip8U.js";import"./Grid-9RoQQr0B.js";import"./index-Ds_sxz32.js";import"./MenuItem-DD1mfKVc.js";import"./UserBadge-CqQgn6ht.js";import"./Card-BWxAw1G0.js";import"./Chip-6EemW15k.js";import"./searchDefaults-DTdCBcA3.js";import"./Slide-OsO5UM9V.js";import"./InputAdornment-CirJh5tS.js";import"./listItemButtonClasses-C2u7v0zY.js";import"./Badge-D8i5sot0.js";import"./usePreviousProps-BekQqSF_.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
