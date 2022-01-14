module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\[[A-Z]+-\d+] )?(\w*)(?:\((.*)\))?!?: (.*)$/,
            breakingHeaderPattern: /^\[[A-Z]+-\d+](\w*)(?:\((.*)\))?!: (.*)$/,
            headerCorrespondence: ['jira', 'type', 'scope', 'subject'],
        },
    },
    rules: {
        'contains-jira-id': [2, 'always'],
        'scope-case': [2, 'always', ['lower-case', 'upper-case']],
    },
    plugins: [
        {
            rules: {
                'contains-jira-id': ({ jira }) => [
                    jira,
                    'Your commit message must start with a JIRA issue ID in the form [PROJ-ID]',
                ],
            },
        },
    ],
};
