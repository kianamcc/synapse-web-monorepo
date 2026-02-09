import{g as u,k as d,n as t,a3 as c,e0 as R,b as e,ku as i,kv as E,H as s,kw as _,p as m,kx as I,ky as S,kd as O}from"./iframe-_RRtoCIB.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-DV6_YbD5.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-D8Vg7UpI.js";import"./useAccessRequirements-BsppqOy_.js";import"./index-C48TJn2v.js";import"./_baseOrderBy-rn73G-Qt.js";import"./_baseIteratee-CgF3Cfek.js";import"./_baseMap-BBX37T8P.js";import"./_baseEach-B8sjjX0y.js";import"./useQueries-BYmqsWy-.js";import"./useInfiniteQuery-DgvZk44b.js";import"./groupBy-D20l0XLr.js";import"./_createAggregator-CjgHDAL3.js";import"./DialogBase-Df86xRKf.js";import"./Close-B1mFQnan.js";import"./HelpPopover-BaNB0Qm4.js";import"./MarkdownPopover-Bys0kR41.js";import"./LightTooltip-CsErXMAn.js";import"./MarkdownSynapse-BNNvc1Ls.js";import"./SkeletonButton-CqYg87XU.js";import"./SkeletonInlineBlock-C6vP7s5M.js";import"./SkeletonTable-S1zm26Db.js";import"./SkeletonParagraph-D0b3NNq9.js";import"./EntityLink-DmImJaJb.js";import"./useEntity-BpUor3p8.js";import"./pickBy-ePaWp_IF.js";import"./isString-Cnb8IIp5.js";import"./useSuspenseQuery-IQfUTR9I.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle--Th3pW8L.js";import"./useGetEntityHeaders-CtnowcMw.js";import"./EntityIcon-BrX81wIY.js";import"./ErrorChip-CFq8S0_y.js";import"./Chip-jVD26EQu.js";import"./UserOrTeamBadge-DUIkYeL-.js";import"./UserBadge-B42BZ6Mr.js";import"./useUserBundle-B0qXkO2d.js";import"./MenuItem-CGSEVSsQ.js";import"./Card-HzydnlVv.js";import"./TeamBadge-BU3UNtFy.js";import"./UnmanagedACTAccessRequirementItem-7HO7CerV.js";import"./RequirementItem-BKQRp7Kc.js";import"./LockTwoTone-CbDMt6Yk.js";import"./UserSearchBoxV2-pMhrR0fp.js";import"./useDebouncedEffect-CYWPKiJB.js";import"./use-deep-compare-effect.esm-BJMH-Hbm.js";import"./uniq-DHs7XRsC.js";import"./without-PbGQccI8.js";import"./Select-aab027f3.esm-BObPBgCO.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-DaDgrfny.js";import"./SelfSignAccessRequirementItem-DHo5v6RJ.js";import"./DataAccessRequestAccessorsFilesForm-DEvTTo4D.js";import"./enums-ZesOsblp.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-ClnEx1t4.js";import"./RadioGroup-D5QmT-Vd.js";import"./Radio-BqAq-yBa.js";import"./SwitchBase-Dsoh1EuZ.js";import"./FormGroup-DrN9hl6S.js";import"./FormControlLabel-B8atO_7D.js";import"./UploadDocumentField-DILlYyKd.js";import"./FileUpload-BJRxW3lO.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Bv5FBvhq.js";import"./GridLegacy-Bb51sRUJ.js";import"./ResearchProjectForm-B35V4QZo.js";import"./TextFieldWithWordLimit-C5O1CtaX.js";import"./AuthenticatedRequirement-KCJZRPrp.js";import"./CertificationRequirement-C0WyCVXg.js";import"./TwoFactorAuthEnabledRequirement-B-Ilbyrt.js";import"./ValidationRequirement-BG7hCA9n.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-yMbCkkeK.js";import"./RejectDataAccessRequestModal-Czx7hLWk.js";import"./CannedRejectionDialog-B4N2Dklj.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-ClTxt1UC.js";import"./Checkbox-D1j8OgqE.js";import"./Grid-D3qunYmj.js";import"./upperFirst-C5o2aWSk.js";import"./_stringToArray-Bkyi5KQ2.js";const ze={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
