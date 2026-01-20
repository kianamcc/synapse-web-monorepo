import{ay as a,j as r,r as i}from"./iframe-CekoipMQ.js";import{S as c}from"./SynapseNavDrawer-dwIFyEn3.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-BP_-hjdn.js";import"./useInfiniteQuery-CLkXZ8rI.js";import"./useDownloadList-NEQcmYTl.js";import"./waitForAsyncResult-B8iB2Cz5.js";import"./useGetFeatureFlag-Dpbj-E0i.js";import"./useUserBundle-CSEHyGRi.js";import"./useSuspenseQuery-Bo7ICQPt.js";import"./CreateProjectModal-CeCHnt5Y.js";import"./ConfirmationDialog-nWrWU4Hp.js";import"./DialogBase-ehDwX6xB.js";import"./Close-DeFS_KGN.js";import"./HelpPopover-BpHylRT-.js";import"./MarkdownPopover-DIRfGSkQ.js";import"./LightTooltip-i2mHHM7n.js";import"./MarkdownSynapse-CORj4GTu.js";import"./SkeletonButton-DjK3K6zG.js";import"./SkeletonInlineBlock-C1cA1eyz.js";import"./SkeletonTable-BgJD-A8R.js";import"./SkeletonParagraph-9U18_kZ7.js";import"./SynapseHomepageNavBar-Dy5Nzupz.js";import"./SageResourcesPopover-C3bi05Zy.js";import"./Grid-D3lpu0NY.js";import"./index-CItDcaQT.js";import"./MenuItem-RwAbQprV.js";import"./UserBadge-D9eizTMK.js";import"./Card-aA0MF0JQ.js";import"./Chip-Dup-72Fi.js";import"./Slide-Cms8RvQg.js";import"./InputAdornment-COZhjb7u.js";import"./listItemButtonClasses-DS1x6z0O.js";import"./Badge-Czrx-BIz.js";import"./usePreviousProps-BCYaUye4.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
