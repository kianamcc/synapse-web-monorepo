import{g as u,k as d,n as t,a2 as c,d_ as R,b as e,ks as i,kt as E,H as s,ku as _,p as m,kv as I,kw as S,kb as O}from"./iframe-CekoipMQ.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-fR0sXKXr.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-osgavqQw.js";import"./useAccessRequirements-CnUv4EeF.js";import"./index-CItDcaQT.js";import"./_baseOrderBy-Du_NjVyS.js";import"./_baseIteratee-BXlC1cTA.js";import"./_baseMap-BtVzMATu.js";import"./_baseEach-BC60SyG-.js";import"./useQueries-C_Zy-8PY.js";import"./useInfiniteQuery-CLkXZ8rI.js";import"./groupBy-CcL8eZLu.js";import"./_createAggregator-Bz2EYJ92.js";import"./DialogBase-ehDwX6xB.js";import"./Close-DeFS_KGN.js";import"./HelpPopover-BpHylRT-.js";import"./MarkdownPopover-DIRfGSkQ.js";import"./LightTooltip-i2mHHM7n.js";import"./MarkdownSynapse-CORj4GTu.js";import"./SkeletonButton-DjK3K6zG.js";import"./SkeletonInlineBlock-C1cA1eyz.js";import"./SkeletonTable-BgJD-A8R.js";import"./SkeletonParagraph-9U18_kZ7.js";import"./EntityLink-DVZj_T_k.js";import"./useEntity-DQgi30ji.js";import"./pickBy-Ww-tQVEU.js";import"./isString-DBP9I2AU.js";import"./useSuspenseQuery-Bo7ICQPt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DJ8fFRPc.js";import"./useGetEntityHeaders-VWVIhl1n.js";import"./EntityIcon-CUOiRRMS.js";import"./ErrorChip-BPuOnnGO.js";import"./Chip-Dup-72Fi.js";import"./UserOrTeamBadge-ay8mNeaA.js";import"./UserBadge-D9eizTMK.js";import"./useUserBundle-CSEHyGRi.js";import"./MenuItem-RwAbQprV.js";import"./Card-aA0MF0JQ.js";import"./TeamBadge-Cr6CCCrr.js";import"./UnmanagedACTAccessRequirementItem-wh-V_nzs.js";import"./RequirementItem-DLF_-c6Y.js";import"./LockTwoTone-ByX3m4P0.js";import"./UserSearchBoxV2-CqWJz8-B.js";import"./useDebouncedEffect-DIxmTt_E.js";import"./use-deep-compare-effect.esm-iBoQXTvh.js";import"./uniq-D3mA5g3i.js";import"./without-DYweA2pi.js";import"./Select-aab027f3.esm-CDHXicX3.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-B3PxTOZZ.js";import"./SelfSignAccessRequirementItem-BV58Bn77.js";import"./DataAccessRequestAccessorsFilesForm-DqlLavr3.js";import"./enums-CgQi3N-Z.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-BP_-hjdn.js";import"./RadioGroup-XhSF_Uv5.js";import"./Radio-DAfi7xeO.js";import"./SwitchBase-CHYvM6e8.js";import"./FormGroup-fPscHGC8.js";import"./FormControlLabel-DIv_L68F.js";import"./UploadDocumentField-BCO5avId.js";import"./FileUpload-4yiY1Pul.js";import"./ManagedACTAccessRequirementFormWikiWrapper-BlJ7Bccm.js";import"./GridLegacy-Wd1tOgGz.js";import"./ResearchProjectForm-BH5xpJgP.js";import"./TextFieldWithWordLimit-DAsgJCbN.js";import"./AuthenticatedRequirement-b2ZtOLw3.js";import"./CertificationRequirement-BVmj0aVV.js";import"./TwoFactorAuthEnabledRequirement-BlwfGjAZ.js";import"./ValidationRequirement-Dh3M_tJq.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BEKUD6cy.js";import"./RejectDataAccessRequestModal-kugjuWwM.js";import"./CannedRejectionDialog-DPEx3etp.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-nWrWU4Hp.js";import"./Checkbox-C1LBy7wi.js";import"./Grid-D3lpu0NY.js";import"./upperFirst-B6KqYvHn.js";import"./_stringToArray-DOgafq61.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xe=["Demo","DemoError"];export{o as Demo,n as DemoError,Xe as __namedExportsOrder,ze as default};
