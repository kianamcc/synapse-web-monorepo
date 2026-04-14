import{s as o,b as n,O as a,H as c}from"./iframe-CbwEnKrb.js";import{A as m}from"./AccessRequirementRelatedProjectsList-aC86G9_h.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-DyAeaSvz.js";import"./index-DKdIbvc8.js";import"./_baseOrderBy-BDueZygm.js";import"./_baseIteratee-D2fQYW4o.js";import"./_baseMap-BHK-7f7f.js";import"./_baseEach-YW957Zpj.js";import"./useInfiniteQuery-B3BSk6H4.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DqiFq7X4.js";import"./useEntity-CsseZqzH.js";import"./pickBy-BQnZNldP.js";import"./isString-D-KW-qVj.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C2YCCRM-.js";import"./useGetEntityHeaders-B1AeMIlv.js";import"./EntityIcon-CN7PxOyF.js";import"./ErrorChip-Wx5J_3dk.js";import"./Chip-CmhjDClg.js";import"./ListItem-D7_yuWDI.js";import"./listItemButtonClasses-BVlmlIkb.js";const v={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},s={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const t={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(t,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,s as ZeroProjectsMock,H as __namedExportsOrder,v as default};
