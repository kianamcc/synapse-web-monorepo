import{z as s,b as o,s as e,H as a,v as i,dm as t}from"./iframe-BzzjdWy2.js";import{E as d}from"./EvaluationEditorPage-CbyGjCjc.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-ChYVCsG3.js";import"./UserBadge-BqcxjeKR.js";import"./useUserBundle-pMV1EYk7.js";import"./useUserGroupHeader-D1PoIV88.js";import"./SkeletonTable-CsxmarD8.js";import"./MenuItem-BVsCkoVz.js";import"./Card-DdtvDXS4.js";import"./Chip-NSHEYu7d.js";import"./WarningDialog-CsFBeMN0.js";import"./ConfirmationDialog--Me4EPSq.js";import"./DialogBase-CGfYT4BU.js";import"./Close-D2aGDGHY.js";import"./HelpPopover-BVPs66Bt.js";import"./MarkdownPopover-BIgmn6Ru.js";import"./LightTooltip-BMWg9unl.js";import"./MarkdownSynapse-17VbQenC.js";import"./SkeletonButton-BhLIT0JK.js";import"./SkeletonInlineBlock-DNuGrhmv.js";import"./SkeletonParagraph-BgDI2leK.js";import"./FormControlLabel-CPkZMGo3.js";import"./Checkbox-DssC3FEB.js";import"./SwitchBase-Cgw9rMrL.js";import"./DateTimePicker-DDDd43J8.js";import"./useMobilePicker-keRiPq_4.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-BRJxiA-5.js";import"./index-1bES-Dua.js";import"./ListItem-CRt8iXQn.js";import"./listItemButtonClasses-BlMug59m.js";import"./Tabs-D_KhLSuW.js";import"./KeyboardArrowRight-K9IMsIx_.js";import"./CardContent-o_Gn5y_h.js";import"./Grid-Cam_jVY-.js";import"./upperFirst-wVBfwP3o.js";import"./_stringToArray-CJrFpvQC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
