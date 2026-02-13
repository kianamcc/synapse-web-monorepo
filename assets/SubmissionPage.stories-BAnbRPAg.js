import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,kv as i,kw as E,H as s,kx as _,p as m,ky as I,kz as S,ke as O}from"./iframe-CAB19BbH.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-BtFOxEdh.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-B2UEH7rL.js";import"./useAccessRequirements-BVbOYYkR.js";import"./index-4rOGAnCi.js";import"./_baseOrderBy-DMWw8kqr.js";import"./_baseIteratee-BDojqQeK.js";import"./_baseMap-CnNy9Vcy.js";import"./_baseEach-DkPOUSOa.js";import"./useQueries-ChXbUcWa.js";import"./useInfiniteQuery-CE_gTuUj.js";import"./groupBy-BM9mjQoJ.js";import"./_createAggregator-CSPaUL-3.js";import"./DialogBase-Bewb0Whx.js";import"./Close-CYApig56.js";import"./HelpPopover-BWiIPGwh.js";import"./MarkdownPopover-DcK6NE8b.js";import"./LightTooltip-C9PyqNfw.js";import"./MarkdownSynapse-C75K0Q9-.js";import"./SkeletonButton-Ap83qpg-.js";import"./SkeletonInlineBlock-DsyBz5jn.js";import"./SkeletonTable-B83AcFFC.js";import"./SkeletonParagraph-Chcpv0Ew.js";import"./EntityLink-M_oaRdMr.js";import"./useEntity-DsUywSWh.js";import"./pickBy-HFHTVGSn.js";import"./isString-3-8O04Ge.js";import"./useSuspenseQuery-zF1b63rt.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-wB7wN9UO.js";import"./useGetEntityHeaders-C-YIOW-4.js";import"./EntityIcon-DxRXlWle.js";import"./ErrorChip-DY4YE4yP.js";import"./Chip-DBDLRQBv.js";import"./UserOrTeamBadge-EweMIDs6.js";import"./UserBadge-BmLtYB6u.js";import"./useUserBundle-D6Ieyrcj.js";import"./MenuItem-CF0OPkSJ.js";import"./Card-C4eY6NNN.js";import"./TeamBadge-DG3GgG1J.js";import"./UnmanagedACTAccessRequirementItem-D3f5y26O.js";import"./RequirementItem-GQT9_x1e.js";import"./LockTwoTone-D9FVbnMw.js";import"./UserSearchBoxV2-DpLEZwmC.js";import"./useDebouncedEffect-D3I8Q5In.js";import"./use-deep-compare-effect.esm-CJphMZrM.js";import"./uniq-tAg4_KIk.js";import"./without-ztkTiXBj.js";import"./Select-aab027f3.esm-nL5vKTZ2.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-CVuOBqnc.js";import"./SelfSignAccessRequirementItem--5fiIckg.js";import"./DataAccessRequestAccessorsFilesForm-DxJZ9eIK.js";import"./enums-D5yPnPot.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-C-FyBqgx.js";import"./RadioGroup-DWolkCZE.js";import"./Radio-XJeZwwBi.js";import"./SwitchBase-DcWVvmI0.js";import"./FormGroup-BUzeacAz.js";import"./FormControlLabel-D9uxq7_c.js";import"./UploadDocumentField-noNwInT1.js";import"./FileUpload-BwT8gouh.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bsn2ecHj.js";import"./GridLegacy-BgtRQdeA.js";import"./ResearchProjectForm-MgQiY7e7.js";import"./TextFieldWithWordLimit-Bxqw0-aT.js";import"./AuthenticatedRequirement-B-fKedkw.js";import"./CertificationRequirement-D0z2Cs3R.js";import"./TwoFactorAuthEnabledRequirement-DD2VeM01.js";import"./ValidationRequirement-DoTJemMy.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BrHJhyO-.js";import"./RejectDataAccessRequestModal-BF7hwXaK.js";import"./CannedRejectionDialog-ogvpssmv.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-M8D-sUFp.js";import"./Checkbox-CNIkB2C5.js";import"./Grid-CjslGWPv.js";import"./upperFirst-BYrqS-CU.js";import"./_stringToArray-CHa1CGqr.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
