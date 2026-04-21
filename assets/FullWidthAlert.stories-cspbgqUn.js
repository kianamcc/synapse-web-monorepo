import{ax as a,r as i,j as r}from"./iframe-DOWR2259.js";import{S as c}from"./SynapseNavDrawer-b23J9fUl.js";import"./index-Chi_LkuB.js";import"./useDataAccessSubmission-By-_dY5S.js";import"./useInfiniteQuery-Bxxw2SLJ.js";import"./useDownloadList-C2W9Vedm.js";import"./waitForAsyncResult-CSCNGY1O.js";import"./useUserBundle-HK3fngpg.js";import"./queryOptions-C9woPjwX.js";import"./CreateProjectModal-BmOlWOA2.js";import"./ConfirmationDialog-Cb77eqVv.js";import"./DialogBase-BOtiLYHN.js";import"./Close-MTVASP6e.js";import"./HelpPopover-COj67R4q.js";import"./MarkdownPopover-D_jfDB0b.js";import"./LightTooltip-DEgnKIbO.js";import"./MarkdownSynapse-CZF-zxeL.js";import"./SkeletonButton-CL0b5STV.js";import"./SkeletonInlineBlock-dfitKoKa.js";import"./SkeletonTable-juUGe8TZ.js";import"./SkeletonParagraph-tnS4LISQ.js";import"./RadioGroup-GLX9QI89.js";import"./Radio-DeKYa5MS.js";import"./SwitchBase-CQWm8_8T.js";import"./FormGroup-f20ajUnv.js";import"./FormControlLabel-wYqx77kH.js";import"./Chip-CUZVi0iR.js";import"./SynapseHomepageNavBar-CbYQ3mRY.js";import"./SageResourcesPopover-DzRJyJ-u.js";import"./Grid-DKvo9WFo.js";import"./index-BQSvnnEc.js";import"./MenuItem-LKT-cJqE.js";import"./UserBadge-BK9aqAni.js";import"./Card-CxyXWyxz.js";import"./searchDefaults-DQyYOJR1.js";import"./Slide-SDfIGjg6.js";import"./InputAdornment-Cy8lSdkk.js";import"./listItemButtonClasses-D40Snkcn.js";import"./Badge-wZmPfi7I.js";import"./usePreviousProps-4oQzHQnB.js";const Q={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:a,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},e={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...e.args},render:s=>r.jsxs(r.Fragment,{children:[r.jsx(c,{initIsOpen:!1,gotoPlace:n=>{window.alert(`Nav bar calling back to change route to ${n}`)}}),r.jsx(a,{...s})]}),decorators:[s=>(i.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),r.jsx(s,{}))]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
