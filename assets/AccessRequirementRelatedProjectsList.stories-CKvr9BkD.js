import{n as o,b as n,Q as a,H as c}from"./iframe-I8dsMSSM.js";import{A as m}from"./AccessRequirementRelatedProjectsList-DNF_x-_A.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BGfKgwXs.js";import"./index-Ds_sxz32.js";import"./_baseOrderBy-BUciiYyg.js";import"./_baseIteratee-BjtSyD36.js";import"./_baseMap-0mYeZW-r.js";import"./_baseEach-hv5x2_iZ.js";import"./useInfiniteQuery-ByZ3F9Pg.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-Bezf5IFQ.js";import"./useEntity-DlG0Sr_U.js";import"./pickBy-CpgGSSQc.js";import"./isString-Bf4Ip_Hk.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-qqhRD9Bx.js";import"./useGetEntityHeaders-DqjZHbs-.js";import"./EntityIcon-B9gCpezi.js";import"./ErrorChip-nsM7c2YE.js";import"./Chip-6EemW15k.js";import"./ListItem-uUQvUGIH.js";import"./listItemButtonClasses-C2u7v0zY.js";const f={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 1234567
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
      // searchAccessRequirements
      http.post(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_SEARCH}\`, () => {
        const zeroRelatedProjects = {
          results: [{
            id: '1234567',
            type: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
            createdOn: '2017-08-23T18:48:20.892Z',
            modifiedOn: '2023-12-14T00:43:41.315Z',
            name: 'Team AR without Related Projects',
            version: '1',
            relatedProjectIds: [],
            reviewerIds: []
          }]
        };
        return HttpResponse.json(zeroRelatedProjects, {
          status: 200
        });
      })]
    }
  }
}`,...s.parameters?.docs?.source}}};const v=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,v as __namedExportsOrder,f as default};
