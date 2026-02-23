import{g as d,k as u,n as t,a3 as c,dZ as R,b as e,kw as i,kx as E,H as s,ky as _,p as m,kz as I,kA as S,kf as O}from"./iframe-Dmz0OYQW.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CMa7hB5C.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-qp7VsWIs.js";import"./useAccessRequirements-C0sn9x1x.js";import"./index-Bgq-5rD6.js";import"./_baseOrderBy-DYeVekv1.js";import"./_baseIteratee-OyrRg5lQ.js";import"./_baseMap-BMU-1V4v.js";import"./_baseEach-CX1KcIpU.js";import"./useQueries-Gj-Mwc6j.js";import"./useInfiniteQuery-BvWsAshg.js";import"./groupBy-BOpNDIGE.js";import"./_createAggregator-DI4Mk896.js";import"./DialogBase-D4eQljKx.js";import"./Close-DJMVqFXZ.js";import"./HelpPopover-DDEeoZql.js";import"./MarkdownPopover-BJM8rGXo.js";import"./LightTooltip-B4ee2TOH.js";import"./MarkdownSynapse-BRO4x38K.js";import"./SkeletonButton--ocR4MjZ.js";import"./SkeletonInlineBlock-DMCr-ZDU.js";import"./SkeletonTable-DZOOfuw_.js";import"./SkeletonParagraph-BbQFsbPl.js";import"./EntityLink-B8y_f3c3.js";import"./useEntity-DCJfD9JE.js";import"./pickBy-BCa-CFjS.js";import"./isString-CBMbF9Nh.js";import"./useSuspenseQuery-DBtfLQcz.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-U54fuo6y.js";import"./useGetEntityHeaders-BnMPdQ_k.js";import"./EntityIcon-Bi5gmTUB.js";import"./ErrorChip-B8CD5IP6.js";import"./Chip-CDOlQzO-.js";import"./UserOrTeamBadge-BuTeXB-Q.js";import"./UserBadge-Dn0Lha6s.js";import"./useUserBundle-BQiPRbYK.js";import"./MenuItem-CDWx0QZm.js";import"./Card-BwP6E97B.js";import"./TeamBadge-BKwoQdV3.js";import"./useRealmPrincipals-B2GYlSoD.js";import"./UnmanagedACTAccessRequirementItem-DxmQfLi2.js";import"./RequirementItem-B0eiDMBP.js";import"./LockTwoTone-kgOPbPZt.js";import"./UserSearchBoxV2-DST74M4_.js";import"./useDebouncedEffect-DF2pF4ZU.js";import"./use-deep-compare-effect.esm-B67s_ENK.js";import"./uniq-CrR8L-o2.js";import"./without-DDZQXX8R.js";import"./Select-aab027f3.esm-BOawVjRe.js";import"./defineProperty-Cp4flQ_6.js";import"./toPropertyKey-C9c9JG92.js";import"./ManagedACTAccessRequirementItemView-7S97c7X8.js";import"./SelfSignAccessRequirementItem-Bus60rRj.js";import"./DataAccessRequestAccessorsFilesForm-Cyw00GuC.js";import"./enums-CD0cWFXz.js";import"./_arrayReduce-CrxnWFSq.js";import"./forEach-CWOCpBhE.js";import"./useDataAccessSubmission-6g8wkK4y.js";import"./RadioGroup-BSw4YiXT.js";import"./Radio-NyT7JcsZ.js";import"./SwitchBase-94QFIekX.js";import"./FormGroup-C5FAaMZP.js";import"./FormControlLabel-CyZL3MkF.js";import"./UploadDocumentField-Bx3Btg0s.js";import"./FileUpload-CsaM6plp.js";import"./ManagedACTAccessRequirementFormWikiWrapper-Dncrv9lA.js";import"./GridLegacy-COZZ2C8T.js";import"./ResearchProjectForm-Bi5EDJeP.js";import"./TextFieldWithWordLimit-BOfp9yDX.js";import"./AuthenticatedRequirement-DGITtCMs.js";import"./CertificationRequirement-DD2lu3gF.js";import"./TwoFactorAuthEnabledRequirement-DUNXejUX.js";import"./ValidationRequirement-DWF5Z-iO.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-BElwB1nX.js";import"./RejectDataAccessRequestModal-vis3eYon.js";import"./CannedRejectionDialog-BMdzbVW3.js";import"./immutable.es-C7Y1z7XT.js";import"./ConfirmationDialog-91A2i7b8.js";import"./Checkbox-DYbJ9vmj.js";import"./Grid-Du4p1N6T.js";import"./upperFirst-BUDEY73y.js";import"./_stringToArray-DSaDxoRR.js";const Xe={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>R({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=E.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${_(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${I(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:S,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...c(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const er=["Demo","DemoError"];export{o as Demo,n as DemoError,er as __namedExportsOrder,Xe as default};
