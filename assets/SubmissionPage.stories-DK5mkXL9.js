import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-BbyAgVod.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-C11bohoj.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-CIHymOmy.js";import"./useAccessRequirements-CFq6EQey.js";import"./index-QgGURz5J.js";import"./_baseOrderBy-DycVdkpX.js";import"./_baseIteratee-Dz5jfdCx.js";import"./_baseMap-DL1JQLUY.js";import"./_baseEach-CjlXDLG7.js";import"./useInfiniteQuery-Cis8MpVG.js";import"./groupBy-Deyl2FcW.js";import"./_createAggregator-BaySRo8w.js";import"./DialogBase-nCS3ahcQ.js";import"./Close-BBCw0Jfc.js";import"./HelpPopover-BKQ_lBJ3.js";import"./MarkdownPopover-BUo7fnkz.js";import"./LightTooltip-CjTxmPMX.js";import"./MarkdownSynapse-7KNTNWWL.js";import"./SkeletonButton-CvgBxsOq.js";import"./SkeletonInlineBlock-CGRSHTJp.js";import"./SkeletonTable-8hMWU9b8.js";import"./SkeletonParagraph-TSyA2Bdi.js";import"./EntityLink-CufhPxaU.js";import"./useEntity-CndnI0qR.js";import"./pickBy-BNwAhD7t.js";import"./isString-CWXCs3Xh.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-d61plDPs.js";import"./useGetEntityHeaders-Domqg3ZE.js";import"./EntityIcon-jfrvfL2r.js";import"./ErrorChip-CDnImLFK.js";import"./Chip-DvcIhhPD.js";import"./UserOrTeamBadge-ChP3CHKo.js";import"./useUserGroupHeader-BxByFlPX.js";import"./TeamBadge-Bx6Pb7M1.js";import"./UserBadge-BMeyNDaA.js";import"./useUserBundle-BZrAVgQo.js";import"./MenuItem-BOC7yxlQ.js";import"./Card-BIlAp2RU.js";import"./UnmanagedACTAccessRequirementItem-Bw8IX4t1.js";import"./RequirementItem-CmhLhpCb.js";import"./LockTwoTone-CXdLkqv9.js";import"./ManagedACTAccessRequirementItemView-BlGua85a.js";import"./SelfSignAccessRequirementItem-DN3o0rHH.js";import"./DataAccessRequestAccessorsFilesForm-C5rde2v-.js";import"./enums-D1of3YaM.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-DWabX3Wp.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-CeuRqy_9.js";import"./UserSearchBox-BGa8EQ8D.js";import"./useDebouncedEffect-DH3r_GOo.js";import"./Autocomplete-BU4fl7Bk.js";import"./usePreviousProps-Ho5tQjOf.js";import"./RadioGroup-CP4Pahtt.js";import"./Radio-BJbcqdQt.js";import"./SwitchBase-D4_ReTEb.js";import"./FormGroup-BVsHtdzv.js";import"./FormControlLabel-DyfmsA3D.js";import"./UploadDocumentField-C4tgQ2-D.js";import"./FileUpload-Dms_37os.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CFqWm_36.js";import"./GridLegacy-D8HjBd6V.js";import"./ResearchProjectForm-B-GwBDux.js";import"./TextFieldWithWordLimit-Cjc1cPJi.js";import"./AuthenticatedRequirement-7U_ihMNZ.js";import"./CertificationRequirement-CxuZOosb.js";import"./TwoFactorAuthEnabledRequirement-D4fI8Pzh.js";import"./ValidationRequirement-DHakRBdS.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Cf-foKa8.js";import"./RejectDataAccessRequestModal-CtNHsqSD.js";import"./CannedRejectionDialog-BekDJXhD.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-D-tV9GIR.js";import"./Checkbox-CEuzbj9w.js";import"./Grid-DUuNkSiV.js";import"./upperFirst-DmKqWPTw.js";import"./_stringToArray-CBKSn9Sg.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'SubmissionPage',
  loaders: [() => registerTableQueryResult({
    sql: \`SELECT * FROM \${REJECT_SUBMISSION_CANNED_RESPONSES_TABLE}\`
  }, mockRejectionReasonsTableQueryResultBundle)],
  parameters: {
    msw: {
      handlers: [...getUserProfileHandlers(MOCK_REPO_ORIGIN), ...getWikiHandlers(MOCK_REPO_ORIGIN),
      // Return submission based on ID
      http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, ({
        params
      }) => {
        const submission = mockSubmissions.find(submission => params.id === submission.id);
        return HttpResponse.json(submission, {
          status: 200
        });
      }),
      // Return a mocked access requirement
      http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_BY_ID(':id')}\`, () => {
        return HttpResponse.json(mockManagedACTAccessRequirement, {
          status: 200
        });
      }), http.get(\`\${MOCK_REPO_ORIGIN}\${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}\`, () => {
        return HttpResponse.json({
          wikiPageId: 123,
          ownerObjectId: mockManagedACTAccessRequirement.id,
          ownerObjectType: 'ACCESS_REQUIREMENT'
        }, {
          status: 200
        });
      }), http.get<{
        id: string;
      }>(\`\${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/:id/acl\`, ({
        params
      }) => {
        return HttpResponse.json({
          id: params.id,
          creationDate: '2022-05-20T14:32:31.665Z',
          etag: 'f4fbd4f2-751d-40dd-9421-1d2693231217',
          resourceAccess: [{
            principalId: MOCK_USER_ID_2,
            accessType: ['REVIEW_SUBMISSIONS']
          }]
        }, {
          status: 200
        });
      }), ...getHandlersForTableQuery(MOCK_REPO_ORIGIN), http.put(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, async ({
        request
      }) => {
        return HttpResponse.json(await request.json(), {
          status: 201
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 1
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Demo Error State',
  parameters: {
    msw: {
      handlers: [http.get(\`\${MOCK_REPO_ORIGIN}\${DATA_ACCESS_SUBMISSION_BY_ID(':id')}\`, () => {
        const errorResponse: ErrorResponse = {
          reason: 'The user must be validated in order to review data access submissions.',
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse'
        };
        return HttpResponse.json(errorResponse, {
          status: 403
        });
      })]
    }
  },
  args: {
    isReviewer: true,
    submissionId: 9999
  }
}`,...n.parameters?.docs?.source}}};const Ve=["Demo","DemoError"];export{o as Demo,n as DemoError,Ve as __namedExportsOrder,Je as default};
