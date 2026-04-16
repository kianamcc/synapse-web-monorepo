import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-BoShs1FP.js";import{E as d}from"./EvaluationEditorPage-DLMH6nqS.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DfxFXCv0.js";import"./UserBadge-BDhj17Fq.js";import"./useUserBundle-eEwiRblB.js";import"./useUserGroupHeader-CC3P47ZT.js";import"./SkeletonTable-IAUM-Obo.js";import"./MenuItem-B1xoDZlQ.js";import"./Card-CSsZocl6.js";import"./Chip-BLhbfSeY.js";import"./WarningDialog-BgQqOpEE.js";import"./ConfirmationDialog-DI2sp8KX.js";import"./DialogBase-acH2E9d8.js";import"./Close-X_gTdy4Z.js";import"./HelpPopover-ERFNAkmY.js";import"./MarkdownPopover-D3Ji5HMq.js";import"./LightTooltip-BwX_yUDD.js";import"./MarkdownSynapse-aw0jXk0G.js";import"./SkeletonButton-DhdzaN7E.js";import"./SkeletonInlineBlock-Bqd6TYJI.js";import"./SkeletonParagraph-BFx803tv.js";import"./FormControlLabel-h3JE9ECB.js";import"./Checkbox-DEIJ5Z9O.js";import"./SwitchBase-DwxvIWq-.js";import"./DateTimePicker-DwlCfhWP.js";import"./useMobilePicker-BQ8z8Xi2.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DLxU4jsW.js";import"./index-C5DEBePd.js";import"./ListItem-Bl46HNn4.js";import"./listItemButtonClasses-BmmzCt_y.js";import"./Tabs-C6S4ZJq9.js";import"./KeyboardArrowRight-BMtHhWZX.js";import"./CardContent-CmCC3L2I.js";import"./Grid-CnqCusZN.js";import"./upperFirst-BdkEh1Qm.js";import"./_stringToArray-C4dkyAFt.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn5585645'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), http.get(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id\`, () => {
        return HttpResponse.json({
          id: '9614712',
          etag: 'a2b871cb-faa4-471a-8c23-b917c77fecb2',
          name: 'a',
          description: 'b',
          ownerId: MOCK_USER_ID.toString(),
          createdOn: '2021-03-02T22:16:14.552Z',
          contentSource: 'syn5585645',
          submissionInstructionsMessage: 'c',
          submissionReceiptMessage: 'c'
        }, {
          status: 200
        });
      }), http.post(\`\${MOCK_REPO_ORIGIN}/repo/v1/evaluation/:id/round/list\`, () => {
        return HttpResponse.json({
          page: [
          // Ended
          {
            id: '259',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: '2022-11-27T08:00:00.000Z',
            roundEnd: '2022-11-30T08:00:00.000Z'
          },
          // Ongoing
          {
            id: '260',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().subtract(1, 'day').toISOString(),
            roundEnd: dayjs().add(2, 'day').toISOString()
          },
          // Future
          {
            id: '261',
            etag: '6f54c353-6c04-46b1-956d-096db1008bce',
            evaluationId: '9614712',
            roundStart: dayjs().add(1, 'week').toISOString(),
            roundEnd: dayjs().add(2, 'week').toISOString()
          }]
        }, {
          status: 200
        });
      })]
    }
  },
  args: {
    evaluationId: '9614712'
  }
}`,...r.parameters?.docs?.source}}};const V=["Entity","Evaluation"];export{n as Entity,r as Evaluation,V as __namedExportsOrder,Q as default};
