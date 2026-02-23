import{n as o,b as n,Q as a,H as c}from"./iframe-Dmz0OYQW.js";import{A as m}from"./AccessRequirementRelatedProjectsList-BAFErakW.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-C0sn9x1x.js";import"./index-Bgq-5rD6.js";import"./_baseOrderBy-DYeVekv1.js";import"./_baseIteratee-OyrRg5lQ.js";import"./_baseMap-BMU-1V4v.js";import"./_baseEach-CX1KcIpU.js";import"./useQueries-Gj-Mwc6j.js";import"./useInfiniteQuery-BvWsAshg.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-B8y_f3c3.js";import"./useEntity-DCJfD9JE.js";import"./pickBy-BCa-CFjS.js";import"./isString-CBMbF9Nh.js";import"./useSuspenseQuery-DBtfLQcz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-U54fuo6y.js";import"./useGetEntityHeaders-BnMPdQ_k.js";import"./EntityIcon-Bi5gmTUB.js";import"./ErrorChip-B8CD5IP6.js";import"./Chip-CDOlQzO-.js";import"./ListItem-BhWR9-KA.js";import"./listItemButtonClasses-BDHR41mL.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9603055
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    accessRequirementId: 9605913
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["ManyProjects","OneProject","ZeroProjectsMock"];export{e as ManyProjects,r as OneProject,t as ZeroProjectsMock,y as __namedExportsOrder,H as default};
