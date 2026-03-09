import{aA as a,j as r,r as i}from"./iframe-q5BnJc5S.js";import{S as c}from"./SynapseNavDrawer-DZWBBh70.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-JBihGSnp.js";import"./useInfiniteQuery-D5XkbWpS.js";import"./useDownloadList-COGkDsXr.js";import"./waitForAsyncResult-CF-sR4PC.js";import"./useUserBundle-DzfGQjuz.js";import"./CreateProjectModal-DonaVcGB.js";import"./ConfirmationDialog-cK5dtH2n.js";import"./DialogBase-TxfBJQdL.js";import"./Close-BFioOlv8.js";import"./HelpPopover-D18uwdic.js";import"./MarkdownPopover-Cs7UCNrh.js";import"./LightTooltip-Q1_0_6h6.js";import"./MarkdownSynapse-DexZcVsN.js";import"./SkeletonButton-CD8U5Nrp.js";import"./SkeletonInlineBlock-Ci-yqlbg.js";import"./SkeletonTable-BfI5L8UG.js";import"./SkeletonParagraph-CBm7mA9i.js";import"./SynapseHomepageNavBar-BA0-0s4v.js";import"./SageResourcesPopover-eIO5okD7.js";import"./Grid-CqsvcyoA.js";import"./index-CnWYiVZi.js";import"./MenuItem-Dyp2z-uJ.js";import"./UserBadge-ByUch6Am.js";import"./Card-Dv6tDWJX.js";import"./Chip-DEZ4NRsM.js";import"./searchDefaults-Dr5I7V_a.js";import"./Slide-AJaWLEaW.js";import"./InputAdornment-Day6LqyR.js";import"./listItemButtonClasses-BmpH4sBo.js";import"./Badge-EZ7gMdB_.js";import"./usePreviousProps-Dp5E5Cow.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
