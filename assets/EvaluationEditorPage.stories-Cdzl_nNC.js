import{g as s,n as e,b as o,H as a,w as i,dF as t}from"./iframe-Dmz0OYQW.js";import{E as d}from"./EvaluationEditorPage-CoBmdKEX.js";import"./index-Chi_LkuB.js";import"./WarningDialog-BXDRyJYn.js";import"./ConfirmationDialog-91A2i7b8.js";import"./DialogBase-D4eQljKx.js";import"./Close-DJMVqFXZ.js";import"./HelpPopover-DDEeoZql.js";import"./MarkdownPopover-BJM8rGXo.js";import"./LightTooltip-B4ee2TOH.js";import"./MarkdownSynapse-BRO4x38K.js";import"./SkeletonButton--ocR4MjZ.js";import"./SkeletonInlineBlock-DMCr-ZDU.js";import"./SkeletonTable-DZOOfuw_.js";import"./SkeletonParagraph-BbQFsbPl.js";import"./CreatedOnByUserDiv-BIvQpaub.js";import"./UserBadge-Dn0Lha6s.js";import"./useUserBundle-BQiPRbYK.js";import"./useSuspenseQuery-DBtfLQcz.js";import"./MenuItem-CDWx0QZm.js";import"./Card-BwP6E97B.js";import"./Chip-CDOlQzO-.js";import"./DateTimePicker-D_JcR4Fr.js";import"./useMobilePicker-22K-9q2_.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DfV1miPS.js";import"./index-Bgq-5rD6.js";import"./ListItem-BhWR9-KA.js";import"./listItemButtonClasses-BDHR41mL.js";import"./Tabs-D03PZ5Q3.js";import"./KeyboardArrowRight-CyVZw2-K.js";import"./CardContent-Dhm7OYug.js";import"./Grid-Du4p1N6T.js";import"./upperFirst-BUDEY73y.js";import"./_stringToArray-DSaDxoRR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Entity","Evaluation"];export{n as Entity,r as Evaluation,A as __namedExportsOrder,z as default};
