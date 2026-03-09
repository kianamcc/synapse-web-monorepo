import{g as u,k as d,n as t,a3 as c,dP as R,b as e,kr as i,ks as E,H as s,kt as _,p as m,ku as I,kv as S,ka as O}from"./iframe-q5BnJc5S.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-Cm-zL_iK.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-BRUiJiRg.js";import"./useAccessRequirements-D5FB2rSM.js";import"./index-CnWYiVZi.js";import"./_baseOrderBy-BiXnBJL2.js";import"./_baseIteratee-Bf6jJ8a4.js";import"./_baseMap-wSNPYFWY.js";import"./_baseEach-C5BYqVlA.js";import"./useInfiniteQuery-D5XkbWpS.js";import"./groupBy-CECcnrh3.js";import"./_createAggregator-CGEbIm2H.js";import"./DialogBase-TxfBJQdL.js";import"./Close-BFioOlv8.js";import"./HelpPopover-D18uwdic.js";import"./MarkdownPopover-Cs7UCNrh.js";import"./LightTooltip-Q1_0_6h6.js";import"./MarkdownSynapse-DexZcVsN.js";import"./SkeletonButton-CD8U5Nrp.js";import"./SkeletonInlineBlock-Ci-yqlbg.js";import"./SkeletonTable-BfI5L8UG.js";import"./SkeletonParagraph-CBm7mA9i.js";import"./EntityLink-tu8PE2Fg.js";import"./useEntity-DDE8woGx.js";import"./pickBy-PZ24Yg5E.js";import"./isString-B56E0Fkc.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-9I7aU0W4.js";import"./useGetEntityHeaders-Dx1N_3Gh.js";import"./EntityIcon-SM_pnPYJ.js";import"./ErrorChip-BM9Nb8_v.js";import"./Chip-DEZ4NRsM.js";import"./UserOrTeamBadge-Vd5bqdmG.js";import"./UserBadge-ByUch6Am.js";import"./useUserBundle-DzfGQjuz.js";import"./MenuItem-Dyp2z-uJ.js";import"./Card-Dv6tDWJX.js";import"./TeamBadge-B6QQN_Lc.js";import"./UnmanagedACTAccessRequirementItem-Lqsu9KU2.js";import"./RequirementItem-CE0Yq2kO.js";import"./LockTwoTone-C655Qzp9.js";import"./UserSearchBoxV2-Cd0Nfqxl.js";import"./useDebouncedEffect-7dDiiClE.js";import"./use-deep-compare-effect.esm-JmWNPEdm.js";import"./uniq-CkK5D4gv.js";import"./without-2E9fiaN6.js";import"./Select-aab027f3.esm-BayROsmm.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CYDS_mHb.js";import"./SelfSignAccessRequirementItem-Mr0iInn6.js";import"./DataAccessRequestAccessorsFilesForm-ByNQe80I.js";import"./enums-Bqs_A5We.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-JBihGSnp.js";import"./RadioGroup-Bp2vovg3.js";import"./Radio-xVFlZNT-.js";import"./SwitchBase-BdkhONOe.js";import"./FormGroup-BAD4rn3w.js";import"./FormControlLabel-DANY_K9i.js";import"./UploadDocumentField-BuevyE2S.js";import"./FileUpload-C1Mw5ir8.js";import"./ManagedACTAccessRequirementFormWikiWrapper-XbJyijcJ.js";import"./GridLegacy-DgGODy3D.js";import"./ResearchProjectForm-fLOgV3nf.js";import"./TextFieldWithWordLimit-CUbjtw1W.js";import"./AuthenticatedRequirement-DyhV5XDv.js";import"./CertificationRequirement-Ditax9e3.js";import"./TwoFactorAuthEnabledRequirement-Dus1dmVQ.js";import"./ValidationRequirement-D0Kwx5Kc.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DkoJaHmu.js";import"./RejectDataAccessRequestModal-ByDP_cCj.js";import"./CannedRejectionDialog-DYaS2mBb.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-cK5dtH2n.js";import"./Checkbox-IAG2j8Ku.js";import"./Grid-CqsvcyoA.js";import"./upperFirst-BK7Fretm.js";import"./_stringToArray-CMYGRK8q.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ze=["Demo","DemoError"];export{o as Demo,n as DemoError,Ze as __namedExportsOrder,Ve as default};
