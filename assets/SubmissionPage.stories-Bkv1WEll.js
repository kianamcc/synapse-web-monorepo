import{z as u,b as e,o as d,s as t,kq as i,kr as c,H as s,ks as R,i as m,kt as E,ku as _,a0 as I,dH as S,k9 as O}from"./iframe-BoShs1FP.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CWW_1KEQ.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-Crl5x09U.js";import"./useAccessRequirements-CwcHVqoa.js";import"./index-C5DEBePd.js";import"./_baseOrderBy-BYJRFfwz.js";import"./_baseIteratee-aOl2kpXV.js";import"./_baseMap-BJz-4MUP.js";import"./_baseEach-CEqVgz86.js";import"./useInfiniteQuery-CWe3h_-o.js";import"./groupBy-C3o_ufDu.js";import"./_createAggregator-_E2Jlk-m.js";import"./DialogBase-acH2E9d8.js";import"./Close-X_gTdy4Z.js";import"./HelpPopover-ERFNAkmY.js";import"./MarkdownPopover-D3Ji5HMq.js";import"./LightTooltip-BwX_yUDD.js";import"./MarkdownSynapse-aw0jXk0G.js";import"./SkeletonButton-DhdzaN7E.js";import"./SkeletonInlineBlock-Bqd6TYJI.js";import"./SkeletonTable-IAUM-Obo.js";import"./SkeletonParagraph-BFx803tv.js";import"./EntityLink-DNV7s2M0.js";import"./useEntity-DOu9xB2b.js";import"./pickBy-CcwyYgKj.js";import"./isString-CnVi7tYZ.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DsjH3l1j.js";import"./useGetEntityHeaders-DIiauxS4.js";import"./EntityIcon-MH9tpPIg.js";import"./ErrorChip-CAM7Wt2C.js";import"./Chip-BLhbfSeY.js";import"./UserOrTeamBadge-BjXBs8WF.js";import"./useUserGroupHeader-CC3P47ZT.js";import"./TeamBadge-AS82XB9W.js";import"./UserBadge-BDhj17Fq.js";import"./useUserBundle-eEwiRblB.js";import"./MenuItem-B1xoDZlQ.js";import"./Card-CSsZocl6.js";import"./UnmanagedACTAccessRequirementItem-BJ3BaHck.js";import"./RequirementItem-DK71MK0U.js";import"./CheckTwoTone-DJ6hsb3V.js";import"./ManagedACTAccessRequirementItemView-DdOijj_Q.js";import"./SelfSignAccessRequirementItem-UZUXv7a8.js";import"./DataAccessRequestAccessorsFilesForm-jns-qPEf.js";import"./enums-DRCFois1.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-BrHAgw_c.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-BKlGVEYR.js";import"./UserSearchBox-BexNBsWI.js";import"./useDebouncedEffect-CTHf0SMa.js";import"./Autocomplete-PHs1LHi4.js";import"./usePreviousProps-BBk78ney.js";import"./RadioGroup-C8vl9WA9.js";import"./Radio-BGgG7vUD.js";import"./SwitchBase-DwxvIWq-.js";import"./FormGroup-Ck15U7vp.js";import"./FormControlLabel-h3JE9ECB.js";import"./UploadDocumentField-ClmSecKl.js";import"./FileUpload-rOdBR5oO.js";import"./ManagedACTAccessRequirementFormWikiWrapper-DuEmktmL.js";import"./GridLegacy-Sie-Mves.js";import"./ResearchProjectForm-D3xumGgB.js";import"./TextFieldWithWordLimit-BRj84GtL.js";import"./AuthenticatedRequirement-DCOFuPp1.js";import"./CertificationRequirement-DgiiwKdY.js";import"./TwoFactorAuthEnabledRequirement-ByYoVIFx.js";import"./ValidationRequirement-BuKrLvEq.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DU7MjAOI.js";import"./RejectDataAccessRequestModal-DHqrXopP.js";import"./CannedRejectionDialog-0-FS7-sJ.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-DI2sp8KX.js";import"./Checkbox-DEIJ5Z9O.js";import"./Grid-CnqCusZN.js";import"./upperFirst-BdkEh1Qm.js";import"./_stringToArray-C4dkyAFt.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...u(e),...d(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
