import{ax as a,r as i,j as r}from"./iframe-DhktRnIr.js";import{S as c}from"./SynapseNavDrawer-CjHO2Ori.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-C5pdnuzk.js";import"./useInfiniteQuery-CS92RVBN.js";import"./useDownloadList-RADkib9F.js";import"./waitForAsyncResult-BsukL3T9.js";import"./useUserBundle-Dg86kmyv.js";import"./CreateProjectModal-D_mRIMA3.js";import"./ConfirmationDialog-JblNvnag.js";import"./DialogBase-BCDCVbM5.js";import"./Close-B6SaOhzQ.js";import"./HelpPopover-BkWnk-uM.js";import"./MarkdownPopover-xKre6e2Q.js";import"./LightTooltip-BNr3uAC-.js";import"./MarkdownSynapse-CedqB2vR.js";import"./SkeletonButton-D2U44ACQ.js";import"./SkeletonInlineBlock-XnMenv0L.js";import"./SkeletonTable-PLxwnxI1.js";import"./SkeletonParagraph-BmLXaGRK.js";import"./SynapseHomepageNavBar-ZsCTATbp.js";import"./SageResourcesPopover-DjZFqFrj.js";import"./Grid-gc0gIy11.js";import"./index-Bnjaz154.js";import"./MenuItem-DuPBgdii.js";import"./UserBadge-DE1mLr5D.js";import"./useUserGroupHeader-CMPn8F8q.js";import"./Card-BQOzBjnu.js";import"./Chip-yuMuQ34K.js";import"./searchDefaults-ZVOKexq2.js";import"./Slide-COo6i-ol.js";import"./InputAdornment-jdJLjreh.js";import"./listItemButtonClasses-DLEBOaTr.js";import"./Badge-BHTPQ2Cx.js";import"./usePreviousProps-CvY5kb-Y.js";const q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
