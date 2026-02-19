import{n as o,b as n,Q as a,H as c}from"./iframe-DPeQX9IY.js";import{A as m}from"./AccessRequirementRelatedProjectsList-C6R5d3RA.js";import"./index-Chi_LkuB.js";import"./useAccessRequirements-BUU86gwl.js";import"./index-BW92oQn_.js";import"./_baseOrderBy-CiWbJ4fO.js";import"./_baseIteratee-CFQTp0Io.js";import"./_baseMap-B4TD45PJ.js";import"./_baseEach-CmWAzlou.js";import"./useQueries-DguaIKVw.js";import"./useInfiniteQuery-xxALfQ-J.js";import"./pluralize-DvqWrKl4.js";import"./EntityLink-DwMYYZAF.js";import"./useEntity-BqStd5q_.js";import"./pickBy-Cul4FH5m.js";import"./isString-eisIkryt.js";import"./useSuspenseQuery-CVo65e5I.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJ1L7xQS.js";import"./useGetEntityHeaders-BtLy7wxA.js";import"./EntityIcon-DCwk1IiC.js";import"./ErrorChip-BOq3CKVT.js";import"./Chip-CLPwGdB7.js";import"./ListItem-_ZEsKrgA.js";import"./listItemButtonClasses-B8stH22h.js";const H={title:"Governance/AccessRequirementRelatedProjectsList",component:m},e={args:{accessRequirementId:9603055}},r={args:{accessRequirementId:9605913}},t={args:{accessRequirementId:1234567},parameters:{stack:"mock",msw:{handlers:[o.post(`${n}${a}`,()=>{const s={results:[{id:"1234567",type:"org.sagebionetworks.repo.model.ManagedACTAccessRequirement",createdOn:"2017-08-23T18:48:20.892Z",modifiedOn:"2023-12-14T00:43:41.315Z",name:"Team AR without Related Projects",version:"1",relatedProjectIds:[],reviewerIds:[]}]};return c.json(s,{status:200})})]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
