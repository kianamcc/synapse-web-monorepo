import{z as s,b as o,s as e,H as a,v as i,dl as t}from"./iframe-BbyAgVod.js";import{E as d}from"./EvaluationEditorPage-DCDI3NJf.js";import"./index-Chi_LkuB.js";import"./DeleteEvaluationQueueConfirmationDialog-DU1C3mtb.js";import"./UserBadge-BMeyNDaA.js";import"./useUserBundle-BZrAVgQo.js";import"./useUserGroupHeader-BxByFlPX.js";import"./SkeletonTable-8hMWU9b8.js";import"./MenuItem-BOC7yxlQ.js";import"./Card-BIlAp2RU.js";import"./Chip-DvcIhhPD.js";import"./WarningDialog-CN4k0eiv.js";import"./ConfirmationDialog-D-tV9GIR.js";import"./DialogBase-nCS3ahcQ.js";import"./Close-BBCw0Jfc.js";import"./HelpPopover-BKQ_lBJ3.js";import"./MarkdownPopover-BUo7fnkz.js";import"./LightTooltip-CjTxmPMX.js";import"./MarkdownSynapse-7KNTNWWL.js";import"./SkeletonButton-CvgBxsOq.js";import"./SkeletonInlineBlock-CGRSHTJp.js";import"./SkeletonParagraph-TSyA2Bdi.js";import"./FormControlLabel-DyfmsA3D.js";import"./Checkbox-CEuzbj9w.js";import"./SwitchBase-D4_ReTEb.js";import"./DateTimePicker-CDzDh7sY.js";import"./useMobilePicker-CZbhmllx.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./visuallyHidden-Dan1xhjv.js";import"./InputAdornment-DTXjPlYE.js";import"./index-QgGURz5J.js";import"./ListItem-aag4LC78.js";import"./listItemButtonClasses-IvvjZyTY.js";import"./Tabs-DNSBQAY0.js";import"./KeyboardArrowRight-DVmLDuBX.js";import"./CardContent-BgIbI9u5.js";import"./Grid-DUuNkSiV.js";import"./upperFirst-DmKqWPTw.js";import"./_stringToArray-CBKSn9Sg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,Q={title:"Synapse/Challenge/EvaluationEditorPage",component:d,args:{onDeleteSuccess:p()}},n={args:{entityId:"syn5585645"}},r={parameters:{stack:"mock",msw:{handlers:[...s(o),e.get(`${o}/repo/v1/evaluation/:id`,()=>a.json({id:"9614712",etag:"a2b871cb-faa4-471a-8c23-b917c77fecb2",name:"a",description:"b",ownerId:i.toString(),createdOn:"2021-03-02T22:16:14.552Z",contentSource:"syn5585645",submissionInstructionsMessage:"c",submissionReceiptMessage:"c"},{status:200})),e.post(`${o}/repo/v1/evaluation/:id/round/list`,()=>a.json({page:[{id:"259",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:"2022-11-27T08:00:00.000Z",roundEnd:"2022-11-30T08:00:00.000Z"},{id:"260",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().subtract(1,"day").toISOString(),roundEnd:t().add(2,"day").toISOString()},{id:"261",etag:"6f54c353-6c04-46b1-956d-096db1008bce",evaluationId:"9614712",roundStart:t().add(1,"week").toISOString(),roundEnd:t().add(2,"week").toISOString()}]},{status:200}))]}},args:{evaluationId:"9614712"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
