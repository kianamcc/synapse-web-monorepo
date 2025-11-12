import{g as I,k as S,n as t,a2 as O,e2 as g,b as e,kt as i,ku as C,H as s,kv as l,p as m,kw as b,kx as T,k8 as A}from"./iframe-CilUHbPg.js";import{m as M}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as N}from"./SubmissionPage-deNIrnnA.js";import"./index-r8ZA1smB.js";import"./AccessRequirementList-Bis5MTNW.js";import"./useAccessRequirements-BhNolthM.js";import"./index-C8mATgyQ.js";import"./_baseOrderBy-DNUTmal3.js";import"./_baseIteratee-aXPVtJAg.js";import"./_baseMap-ByG3mCKH.js";import"./_baseEach-ChVrrgk5.js";import"./useQueries-C86FHiXO.js";import"./useInfiniteQuery-CiMH4Vku.js";import"./groupBy-B6_q46ro.js";import"./_createAggregator-6tLuziYO.js";import"./DialogBase-C-nhtl71.js";import"./Close-C47av42V.js";import"./HelpPopover-C4EQhFdh.js";import"./MarkdownPopover-CXrifCK2.js";import"./LightTooltip-CnXLnWLu.js";import"./MarkdownSynapse-BIpeO25x.js";import"./SkeletonButton-CSbYuARp.js";import"./SkeletonInlineBlock-CTT3cgnO.js";import"./SkeletonTable-BBjGNDxT.js";import"./SkeletonParagraph-Db2vPRz1.js";import"./EntityLink-CZSwh9N5.js";import"./useEntity-BmlUl-r7.js";import"./pickBy-DijzeuJ2.js";import"./isString-C-NPF1R2.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-IzEWxt-O.js";import"./useGetEntityHeaders-0KKpsuzV.js";import"./EntityIcon-Bg1x5MSZ.js";import"./ErrorChip-qfBQbU0w.js";import"./Chip-CkYJv3x0.js";import"./UserOrTeamBadge-BMQVHrFB.js";import"./UserBadge-CpFSGMSz.js";import"./MenuItem-DRH3ELNc.js";import"./Card-BAFuavy_.js";import"./TeamBadge-CgEp4wVL.js";import"./UnmanagedACTAccessRequirementItem-DlP87nuW.js";import"./RequirementItem-BpYQ3BtQ.js";import"./LockTwoTone-Dbgm935X.js";import"./UserSearchBoxV2-BxedFlCj.js";import"./useDebouncedEffect-YjRXnNv0.js";import"./use-deep-compare-effect.esm-BSZ-nTCj.js";import"./uniq-qUh1kdV4.js";import"./without-BI-xwuld.js";import"./Select-aab027f3.esm-CjttkeWq.js";import"./defineProperty-CegpTSss.js";import"./ManagedACTAccessRequirementItemView-BGLAiL12.js";import"./SelfSignAccessRequirementItem-oJYUaUc4.js";import"./DataAccessRequestAccessorsFilesForm-DK7ZGqm4.js";import"./enums-DUabj_98.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-B8iwwgef.js";import"./useDataAccessSubmission-BDSgcr-_.js";import"./RadioGroup-CjCKe7rg.js";import"./Radio-BEkw6400.js";import"./SwitchBase-cymeMccA.js";import"./FormGroup-unck3KFd.js";import"./FormControlLabel-BDptKX7D.js";import"./UploadDocumentField-B5W9QXR4.js";import"./FileUpload-olgf949G.js";import"./ManagedACTAccessRequirementFormWikiWrapper-zNsXoJAo.js";import"./GridLegacy-BzAr0VOW.js";import"./ResearchProjectForm-4dDBdacU.js";import"./TextFieldWithWordLimit-DRiNSQKG.js";import"./AuthenticatedRequirement-BWBpOglo.js";import"./CertificationRequirement-DkcrFLxY.js";import"./TwoFactorAuthEnabledRequirement-DGKO9F_E.js";import"./ValidationRequirement-CvTH-EWl.js";import"./duration-DQ1NfnzY.js";import"./FileHandleLink-n9UTp1ud.js";import"./RejectDataAccessRequestModal-tHI2txrS.js";import"./CannedRejectionDialog-HNl4h4uo.js";import"./immutable.es-BJjDfH8f.js";import"./ConfirmationDialog-CmKdHCN4.js";import"./Checkbox-jrzWhPpX.js";import"./Grid-wETwsgbg.js";import"./upperFirst-BeUf3tr2.js";import"./_stringToArray-Dzu6fXzE.js";const tr={title:"Governance/SubmissionPage",component:N,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>g({sql:`SELECT * FROM ${A}`},M)],parameters:{msw:{handlers:[...I(e),...S(e),t.get(`${e}${i(":id")}`,({params:r})=>{const E=C.find(_=>r.id===_.id);return s.json(E,{status:200})}),t.get(`${e}${l(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${b(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:T,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...O(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};var a,p,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,R;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(R=(c=n.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};const sr=["Demo","DemoError"];export{o as Demo,n as DemoError,sr as __namedExportsOrder,tr as default};
