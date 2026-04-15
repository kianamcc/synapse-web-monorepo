import{z as d,b as e,o as u,s as t,kp as i,kq as c,H as s,kr as R,i as m,ks as E,kt as _,a0 as I,dG as S,k8 as O}from"./iframe-DhktRnIr.js";import{m as g}from"./mockRejectionReasonsTableQueryResultBundle-DI70dpzk.js";import{S as C}from"./SubmissionPage-CWD3JhNV.js";import"./index-Chi_LkuB.js";import"./AccessRequirementList-l7RK7qaM.js";import"./useAccessRequirements-T5gXkMsQ.js";import"./index-Bnjaz154.js";import"./_baseOrderBy-CNqQo0rK.js";import"./_baseIteratee-j03d5HAz.js";import"./_baseMap-DQ2ohJqA.js";import"./_baseEach-BF0Qvnln.js";import"./useInfiniteQuery-CS92RVBN.js";import"./groupBy-Bwg7KqJf.js";import"./_createAggregator-CKH3gOtL.js";import"./DialogBase-BCDCVbM5.js";import"./Close-B6SaOhzQ.js";import"./HelpPopover-BkWnk-uM.js";import"./MarkdownPopover-xKre6e2Q.js";import"./LightTooltip-BNr3uAC-.js";import"./MarkdownSynapse-CedqB2vR.js";import"./SkeletonButton-D2U44ACQ.js";import"./SkeletonInlineBlock-XnMenv0L.js";import"./SkeletonTable-PLxwnxI1.js";import"./SkeletonParagraph-BmLXaGRK.js";import"./EntityLink-48KGLctU.js";import"./useEntity-CUv7_orb.js";import"./pickBy-DMr8oMN4.js";import"./isString-3MwD6H2V.js";import"./queryOptions-C9woPjwX.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-RWHJm12U.js";import"./useGetEntityHeaders-98E5Naf4.js";import"./EntityIcon-BI5d33IB.js";import"./ErrorChip-yT-v9atK.js";import"./Chip-yuMuQ34K.js";import"./UserOrTeamBadge-BOlqpvND.js";import"./useUserGroupHeader-CMPn8F8q.js";import"./TeamBadge-DtjlyZvg.js";import"./UserBadge-DE1mLr5D.js";import"./useUserBundle-Dg86kmyv.js";import"./MenuItem-DuPBgdii.js";import"./Card-BQOzBjnu.js";import"./UnmanagedACTAccessRequirementItem-BYhS_Sv6.js";import"./RequirementItem-DoftBsxw.js";import"./LockTwoTone-ByzK8W7G.js";import"./ManagedACTAccessRequirementItemView-BmZEHU3a.js";import"./SelfSignAccessRequirementItem-BPpw7Pc2.js";import"./DataAccessRequestAccessorsFilesForm-Bh-YXo21.js";import"./enums-DOjFgoc6.js";import"./_arrayReduce-CrxnWFSq.js";import"./uniq-8mUVGe-E.js";import"./forEach-UWyboym_.js";import"./useDataAccessSubmission-C5pdnuzk.js";import"./UserSearchBox-D_g80B3n.js";import"./useDebouncedEffect-Cu8D01ca.js";import"./Autocomplete-R4tK8iQ1.js";import"./usePreviousProps-CvY5kb-Y.js";import"./RadioGroup-hMyxoAFB.js";import"./Radio-B8qSayR9.js";import"./SwitchBase-TNDfqxp2.js";import"./FormGroup-BYciALId.js";import"./FormControlLabel-D9RU6qZV.js";import"./UploadDocumentField-BVHj1WTQ.js";import"./FileUpload-CrascEXc.js";import"./ManagedACTAccessRequirementFormWikiWrapper-CNIepc1N.js";import"./GridLegacy-DV21miFJ.js";import"./ResearchProjectForm-D9hegdmx.js";import"./TextFieldWithWordLimit-Cbek7EkK.js";import"./AuthenticatedRequirement-D8VHf1Ie.js";import"./CertificationRequirement-DyGCMJXf.js";import"./TwoFactorAuthEnabledRequirement-OHFy7Dcw.js";import"./ValidationRequirement-Bvr4jEXW.js";import"./duration-DbmI10NM.js";import"./FileHandleLink-DAa0sPL0.js";import"./RejectDataAccessRequestModal-Ddlg7hTF.js";import"./CannedRejectionDialog-DKKHSrjO.js";import"./immutable.es-CT6QCxCG.js";import"./ConfirmationDialog-JblNvnag.js";import"./Checkbox-DFP_HCIj.js";import"./Grid-gc0gIy11.js";import"./upperFirst-BjWLjAOz.js";import"./_stringToArray-BPpXKVUM.js";const Je={title:"Governance/SubmissionPage",component:C,parameters:{stack:"mock",withRouter:!0},argTypes:{isAuthenticated:{control:{type:"boolean"}}},args:{isAuthenticated:!0}},o={name:"SubmissionPage",loaders:[()=>S({sql:`SELECT * FROM ${O}`},g)],parameters:{msw:{handlers:[...d(e),...u(e),t.get(`${e}${i(":id")}`,({params:r})=>{const a=c.find(p=>r.id===p.id);return s.json(a,{status:200})}),t.get(`${e}${R(":id")}`,()=>s.json(m,{status:200})),t.get(`${e}${E(":id")}`,()=>s.json({wikiPageId:123,ownerObjectId:m.id,ownerObjectType:"ACCESS_REQUIREMENT"},{status:200})),t.get(`${e}/repo/v1/accessRequirement/:id/acl`,({params:r})=>s.json({id:r.id,creationDate:"2022-05-20T14:32:31.665Z",etag:"f4fbd4f2-751d-40dd-9421-1d2693231217",resourceAccess:[{principalId:_,accessType:["REVIEW_SUBMISSIONS"]}]},{status:200})),...I(e),t.put(`${e}${i(":id")}`,async({request:r})=>s.json(await r.json(),{status:201}))]}},args:{isReviewer:!0,submissionId:1}},n={name:"Demo Error State",parameters:{msw:{handlers:[t.get(`${e}${i(":id")}`,()=>{const r={reason:"The user must be validated in order to review data access submissions.",concreteType:"org.sagebionetworks.repo.model.ErrorResponse"};return s.json(r,{status:403})})]}},args:{isReviewer:!0,submissionId:9999}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
