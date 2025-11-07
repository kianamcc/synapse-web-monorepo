import{at as g,j as e,r as w}from"./iframe-i1vzbyyB.js";import{S as v}from"./SynapseNavDrawer-q1vNSy6g.js";import"./index-r8ZA1smB.js";import"./useDataAccessSubmission-DHWAcOth.js";import"./useInfiniteQuery-Cp3zF6id.js";import"./useDownloadList-BKi8CR5P.js";import"./waitForAsyncResult-CKWl8OLu.js";import"./CreateProjectModal-DyUbA1l_.js";import"./ConfirmationDialog-CjCOKckI.js";import"./DialogBase-CnzJW4Vm.js";import"./Close-BcpwEnYM.js";import"./HelpPopover-D6TWnFMx.js";import"./MarkdownPopover-BjxGRa1i.js";import"./LightTooltip-DG7_ftuI.js";import"./MarkdownSynapse-ofrcwXhb.js";import"./SkeletonButton-BHwx8d5H.js";import"./SkeletonInlineBlock-CUOfhEKh.js";import"./SkeletonTable-B_XrK9-X.js";import"./SkeletonParagraph-CCi6Cu6y.js";import"./SynapseHomepageNavBar-BeqVNaQz.js";import"./SageResourcesPopover-668PQ1AF.js";import"./Grid-jDXwWxNI.js";import"./index-CEeSGOsu.js";import"./MenuItem-tnFeCmzc.js";import"./UserBadge-BbrHVLhW.js";import"./Card-C6x5W7R6.js";import"./Chip-CnB9FDDp.js";import"./Slide-DDteed-J.js";import"./InputAdornment-RZfMJBeU.js";import"./listItemButtonClasses-BYSPJK2B.js";import"./Badge-DgU66qW6.js";import"./usePreviousProps-VLvW_37M.js";const V={title:"UI/FullWidthAlert",argTypes:{variant:{options:["warning","info","danger","success",void 0],control:{type:"radio"}}},component:g,parameters:{chromatic:{viewports:[300,600,1200]}}},t={args:{variant:"success",show:!0,title:"Package has been downloaded",description:"The files contained in this zip file have been removed from your list.",isGlobal:!1}},r={args:{variant:"success",show:!0,title:"Success",description:"Lorem ipsum dolor sit amet",primaryButtonConfig:{text:"Accept and Continue",onClick:()=>alert("Accepted")},isGlobal:!0,onClose:void 0}},o={args:{...r.args},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(v,{initIsOpen:!1,gotoPlace:h=>{window.alert(`Nav bar calling back to change route to ${h}`)}}),e.jsx(g,{...s})]}),decorators:[s=>(w.useEffect(()=>(document.body.classList.add("SynapseNavDrawerIsShowing"),()=>{document.body.classList.remove("SynapseNavDrawerIsShowing")}),[]),e.jsx(s,{}))]};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
