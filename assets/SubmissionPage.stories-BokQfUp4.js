import{g as u,k as d,n as t,a3 as c,dO as R,b as e,kq as i,kr as E,H as s,ks as _,p as m,kt as I,ku as S,k9 as O}from"./iframe-CZHSx5wE.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CWy4Kp5Y.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-4-W74DtW.js";import"./useAccessRequirements-B2ui8s-s.js";import"./index-BdE-IeMQ.js";import"./_baseOrderBy-Rq4XcVNX.js";import"./_baseIteratee-DCncjzSw.js";import"./_baseMap-C7oJPype.js";import"./_baseEach-D3LyP7M6.js";import"./useInfiniteQuery-CS833kDM.js";import"./groupBy-B_xXwLK-.js";import"./_createAggregator-Bo7lkFjy.js";import"./DialogBase-CS2gTNzV.js";import"./Close-Ds5z5nV-.js";import"./HelpPopover-AzM6-1Mr.js";import"./MarkdownPopover-_55D8pmQ.js";import"./LightTooltip-Bl7I4CQL.js";import"./MarkdownSynapse-phzYM2Y3.js";import"./SkeletonButton-BE152swZ.js";import"./SkeletonInlineBlock-BWjEXTNa.js";import"./SkeletonTable-BtPTkHAP.js";import"./SkeletonParagraph-BXCrfssX.js";import"./EntityLink-CwNC1i02.js";import"./useEntity-DTPz22my.js";import"./pickBy-C3Fd7sur.js";import"./isString-Bk7WbP2_.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-C0ASgpHy.js";import"./useGetEntityHeaders-ZzmpFnn5.js";import"./EntityIcon-jE3VTBiB.js";import"./ErrorChip-Du4NsD2v.js";import"./Chip-DRM-PW0Q.js";import"./UserOrTeamBadge-Bi9ctn4G.js";import"./UserBadge-BrFwZcdF.js";import"./useUserBundle-Cv-fJG41.js";import"./MenuItem-9G2m_4hr.js";import"./Card-CTm-897L.js";import"./TeamBadge-ClaI6dpD.js";import"./UnmanagedACTAccessRequirementItem-CYjHF3gF.js";import"./RequirementItem-DdyE6d8W.js";import"./LockTwoTone-BjpUso1T.js";import"./UserSearchBoxV2-DnujxB7O.js";import"./useDebouncedEffect-BYXY3gWL.js";import"./use-deep-compare-effect.esm-BTQljnhV.js";import"./uniq-BLDAgS8z.js";import"./without-C_x_GdL6.js";import"./Select-aab027f3.esm-7w82rK3w.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-C_EmCh-5.js";import"./SelfSignAccessRequirementItem-CcwYUKda.js";import"./DataAccessRequestAccessorsFilesForm-CWkimAmp.js";import"./enums-CE3kdcZ-.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-pDnJ8UcQ.js";import"./RadioGroup-B9mBaJVC.js";import"./Radio-B6T0jDhC.js";import"./SwitchBase-DkO8c4je.js";import"./FormGroup-DnFOsK86.js";import"./FormControlLabel-DcwvPxSI.js";import"./UploadDocumentField-CO8ZmuFs.js";import"./FileUpload-D6YXmJiu.js";import"./ManagedACTAccessRequirementFormWikiWrapper-zjxLtMAx.js";import"./GridLegacy-CaOuUl4S.js";import"./ResearchProjectForm-CqX5_Omz.js";import"./TextFieldWithWordLimit-CvcSMJ04.js";import"./AuthenticatedRequirement-DCxFSR18.js";import"./CertificationRequirement-DCXZsWsm.js";import"./TwoFactorAuthEnabledRequirement-C2gHothT.js";import"./ValidationRequirement-DX-8J3PW.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-Damuh75f.js";import"./RejectDataAccessRequestModal-DxbEThxv.js";import"./CannedRejectionDialog-CGc7ZQZc.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-pnn_aK2g.js";import"./Checkbox-qPdo7eWH.js";import"./Grid-BzGkt_Uj.js";import"./upperFirst-BvaFN2lJ.js";import"./_stringToArray-CPj_Q9l3.js";const Ve={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
