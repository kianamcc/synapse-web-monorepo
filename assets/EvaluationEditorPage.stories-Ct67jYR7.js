import{g as s,n as e,b as o,H as a,w as i,dG as t}from"./iframe-DmIbR_r6.js";import{E as d}from"./EvaluationEditorPage-QJMMlsUM.js";import"./index-Chi_LkuB.js";import"./WarningDialog-ksmkyZTX.js";import"./ConfirmationDialog-Di6NNHa2.js";import"./DialogBase-ChzVu5cL.js";import"./Close-Bq87bjEk.js";import"./HelpPopover-cKaKE6m4.js";import"./MarkdownPopover-CDin4ext.js";import"./LightTooltip-CYkDKzfj.js";import"./MarkdownSynapse-DuxA3dVB.js";import"./SkeletonButton-vlFvkNkv.js";import"./SkeletonInlineBlock-DFTJODNT.js";import"./SkeletonTable-Bj3J0JYP.js";import"./SkeletonParagraph-BUZlTYNH.js";import"./CreatedOnByUserDiv-BcPku7lP.js";import"./UserBadge-BHBKP-iC.js";import"./useUserBundle-B2LL3X0c.js";import"./useSuspenseQuery-Bb68RTLn.js";import"./MenuItem-BnZD-coi.js";import"./Card-DxCpoD8K.js";import"./Chip-BRJez_-q.js";import"./DateTimePicker-DtfH21WI.js";import"./useMobilePicker-CeExYluk.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-mMmBzDbm.js";import"./index-Cbto9jav.js";import"./ListItem-D--P9wx6.js";import"./listItemButtonClasses-DEqQDI3y.js";import"./Tabs-BzlT_JG_.js";import"./KeyboardArrowRight-Bt03slz8.js";import"./CardContent-CSXACl69.js";import"./Grid-DiIhkCNi.js";import"./upperFirst-CZWaM3B8.js";import"./_stringToArray-UjcNyvLc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,z={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
