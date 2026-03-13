import{aA as a,j as r,r as i}from"./iframe-B232wCNe.js";import{S as c}from"./SynapseNavDrawer-DIu6QHoa.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-xzdvJmRA.js";import"./useInfiniteQuery-DWrZvRU-.js";import"./useDownloadList-826UWfdj.js";import"./waitForAsyncResult-qP6KOG6F.js";import"./useUserBundle-CeFUDuAK.js";import"./CreateProjectModal-CMJ_lbbS.js";import"./ConfirmationDialog-BvIFxS0n.js";import"./DialogBase-CdGKFNop.js";import"./Close-B-DQ6RtW.js";import"./HelpPopover-0TadkfCC.js";import"./MarkdownPopover-DhG8HMhS.js";import"./LightTooltip-krKtsD_O.js";import"./MarkdownSynapse-C0MRPwg8.js";import"./SkeletonButton-BFqV1Bjq.js";import"./SkeletonInlineBlock-B1yQCAbt.js";import"./SkeletonTable-DsTP05oa.js";import"./SkeletonParagraph-D6S7cLaW.js";import"./SynapseHomepageNavBar-CbNtLeqT.js";import"./SageResourcesPopover-BQT4j5NC.js";import"./Grid-Bt4fsCKY.js";import"./index-B8EHcCSt.js";import"./MenuItem-G0IpQDVS.js";import"./UserBadge-p8iKlC6M.js";import"./Card-mT5-QQz8.js";import"./Chip-C9IsdVPl.js";import"./searchDefaults-gh_QaUCF.js";import"./Slide-pN_q6ed6.js";import"./InputAdornment-DGKmgc-v.js";import"./listItemButtonClasses-AwHak7Ut.js";import"./Badge-CPHQkCrr.js";import"./usePreviousProps-DiGhB4t2.js";const U={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
