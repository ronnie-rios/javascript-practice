# Identity and Access Management - Global Service

- Root account is created by default - should not be used or shared
- create **Users** people within your organization, can be grouped
- groups only contain groups, not other groups
- users can belong to multiple groups

## why create groups / users?
- Users and Groups can be assigned JSON documents, called policies, which means what that respected role can do

## Root User
- it has all the permissions, it better to create user roles
- EX: create an admin account, best practice to keep secure

## Creating groups
- permissions are assigned through policies
- **Tags**: info to help organize, they are optional

## signin to IAM user
- enter the account alias associated
- the IAM username, and the PW
- once logged in, you can check via the @ symbol on the top account, the IAM user can do whatever permissions it has
- always better to use the IAM user

## IAM policies Inhertiance
- users will inherit policies from their group
- can create **Inline Policies** which are specific to a single user
- if a group has users from other groups, will inherit those policies too
- again, they will be JSON document
    - consist of a version 
    - id - identifier
    - Statements:
        - Sid, statement ID
        - Effect: which allows or denies access
        - Principal: account/user/role to which this policy is applied to
        - Action: list of actions this policy allows or denies
        - Resource: list of resources to which the action is applied to
        - Condition: condidtions for when 
    - from the above, Effect, Principal, Action, Resource are most prominent