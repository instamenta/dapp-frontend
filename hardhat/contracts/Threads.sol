// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Threads is Ownable {
    receive() external payable {
        createUser();
    }

    // Model for Threads which is main component of the contract
    struct Thread {
        string id;
        string name;
        string content;
        uint256 balance;
        address creator;
        address[] likes;
        address[] dislikes;
        string[] commentsIds;
    }

    // Models for comments that are created on Threads
    struct Comment {
        string id;
        uint256 balance;
        address creator;
        string content;
    }

    struct User {
        address id;
        uint256 contributions;
        uint256 threads;
        uint256 comments;
    }

    mapping(string => Thread) public threads;
    mapping(string => Comment) public comments;
    mapping(address => User) public users;

    // Store ids in order to get structs paginated
    string[] public threadIds;
    address[] public userAddresses;

    constructor () Ownable(msg.sender) {}

    event ThreadEvent(
        address indexed _user,
        uint256 _amount,
        string _targetId,
        string _type
    );

    event CommentEvent(
        address indexed _user,
        uint256 _amount,
        string _targetId,
        string _commentId,
        string _type
    );

    modifier requireMinEth() {
        require(msg.value > 0.00001 ether, "Insufficient ETH sent");
        _;
    }

    modifier threadShouldExist(string memory _targetId) {
        require(bytes(threads[_targetId].id).length > 0, "Thread should exist");
        _;
    }

    modifier threadShouldNotExist(string memory _targetId) {
        require(
            bytes(threads[_targetId].id).length == 0,
            "Thread should not exist"
        );
        _;
    }

    modifier commentShouldExist(string memory _commentId) {
        require(
            bytes(comments[_commentId].id).length > 0,
            "Comment should exist"
        );
        _;
    }

    modifier commentShouldNotExist(string memory _commentId) {
        require(
            bytes(comments[_commentId].id).length == 0,
            "Comment should not exist"
        );
        _;
    }

    function createUser() private {
        // Create a new user if they don't exist
        if (users[msg.sender].id == address(0)) {
            users[msg.sender] = User({
                id: msg.sender,
                contributions: 0,
                threads: 0,
                comments: 0
            });
        }
    }

    function getThread(string memory _targetId)
    public
    view
    threadShouldExist(_targetId)
    returns (Thread memory)
    {
        return threads[_targetId];
    }

    function getThreadsLength() public view returns (uint256) {
        return threadIds.length;
    }

    function getThreads(uint256 offset, uint256 limit)
    public
    view
    returns (Thread[] memory)
    {
        uint256 totalCount = threadIds.length;
        uint256 endIndex = offset + limit;
        if (endIndex > totalCount) {
            endIndex = totalCount;
        }

        Thread[] memory result = new Thread[](endIndex - offset);

        for (uint256 i = offset; i < endIndex; i++) {
            result[i - offset] = threads[threadIds[i]];
        }

        return result;
    }

    function getComment(string memory _commentId)
    public
    view
    commentShouldExist(_commentId)
    returns (Comment memory)
    {
        return comments[_commentId];
    }

    function getCommentsLength(string memory _targetId)
    public
    view
    threadShouldExist(_targetId)
    returns (uint256)
    {
        return threads[_targetId].commentsIds.length;
    }

    function getComments(
        string memory _targetId,
        uint256 offset,
        uint256 limit
    ) public view returns (Comment[] memory) {
        string[] memory commentIds = threads[_targetId].commentsIds;
        uint256 totalComments = commentIds.length;

        if (offset >= totalComments) {
            return new Comment[](0); // No comments to return
        }

        uint256 endIndex = offset + limit;
        if (endIndex > totalComments) {
            endIndex = totalComments;
        }

        Comment[] memory commentList = new Comment[](endIndex - offset);

        for (uint256 i = offset; i < endIndex; i++) {
            commentList[i - offset] = comments[commentIds[i]];
        }

        return commentList;
    }

    function getUser(address _address) public view returns (User memory) {
        require(users[_address].id != address(0), "User does not exist");

        return users[_address];
    }

    function getUsersLength() public view returns (uint256) {
        return userAddresses.length;
    }

    function getUsers(uint256 offset, uint256 limit)
    public
    view
    returns (User[] memory)
    {
        uint256 totalUsers = userAddresses.length;

        if (offset >= totalUsers) {
            return new User[](0); // No users to return
        }

        uint256 endIndex = offset + limit;
        if (endIndex > totalUsers) {
            endIndex = totalUsers;
        }

        User[] memory userList = new User[](endIndex - offset);

        for (uint256 i = offset; i < endIndex; i++) {
            userList[i - offset] = users[userAddresses[i]];
        }

        return userList;
    }

    function createThread(
        string memory _targetId,
        string memory _name,
        string memory _content
    ) public payable requireMinEth threadShouldNotExist(_targetId) {

        threads[_targetId] = Thread({
            id: _targetId,
            name: _name,
            balance: msg.value,
            creator: msg.sender,
            content: _content,
            likes: new address[](0),
            dislikes: new address[](0),
            commentsIds: new string[](0)
        });

        users[msg.sender].threads++;

        threadIds.push(_targetId);

        emit ThreadEvent({
            _user: msg.sender,
            _amount: msg.value,
            _targetId: _targetId,
            _type: "create"
        });
    }

    function promoteThread(string memory _targetId)
    public
    payable
    requireMinEth
    threadShouldExist(_targetId)
    {
        threads[_targetId].balance += msg.value;

        users[msg.sender].contributions += msg.value;

        emit ThreadEvent({
            _user: msg.sender,
            _amount: msg.value,
            _targetId: _targetId,
            _type: "promote"
        });
    }

    function donate(string memory _targetId)
    public
    payable
    requireMinEth
    threadShouldExist(_targetId)
    {
        threads[_targetId].balance += msg.value;

        users[msg.sender].contributions += msg.value;

        emit ThreadEvent({
            _user: msg.sender,
            _amount: msg.value,
            _targetId: _targetId,
            _type: "donate"
        });
    }

    function like(string memory _targetId)
    public
    payable
    requireMinEth
    threadShouldExist(_targetId)
    {
        threads[_targetId].balance += msg.value;

        users[msg.sender].contributions += msg.value;

        emit ThreadEvent({
            _user: msg.sender,
            _amount: msg.value,
            _targetId: _targetId,
            _type: "like"
        });
    }

    function dislike(string memory _targetId)
    public
    payable
    requireMinEth
    threadShouldExist(_targetId)
    {
        threads[_targetId].balance += msg.value;

        users[msg.sender].contributions += msg.value;

        emit ThreadEvent({
            _user: msg.sender,
            _amount: msg.value,
            _targetId: _targetId,
            _type: "dislike"
        });
    }

    function createComment(
        string memory _targetId,
        string memory _commentId,
        string memory _content
    ) public payable requireMinEth commentShouldNotExist(_commentId) {
        comments[_targetId] = Comment({
            balance: msg.value,
            creator: msg.sender,
            id: _targetId,
            content: _content
        });

        User memory user = users[msg.sender];

        user.contributions++;
        user.comments++;

        threads[_targetId].commentsIds.push(_commentId);

        emit CommentEvent({
            _user: msg.sender,
            _amount: msg.value,
            _targetId: _targetId,
            _commentId: _commentId,
            _type: "create"
        });
    }

    function likeComment(string memory _targetId, string memory _commentId)
    public
    payable
    requireMinEth
    commentShouldExist(_commentId)
    {
        comments[_commentId].balance += msg.value;

        users[msg.sender].contributions += msg.value;

        emit CommentEvent({
            _user: msg.sender,
            _amount: msg.value,
            _targetId: _targetId,
            _commentId: _commentId,
            _type: "like"
        });
    }

    function dislikeComment(string memory _targetId, string memory _commentId)
    public
    payable
    requireMinEth
    commentShouldExist(_commentId)
    {
        comments[_commentId].balance += msg.value;

        users[msg.sender].contributions += msg.value;

        emit CommentEvent({
            _user: msg.sender,
            _amount: msg.value,
            _targetId: _targetId,
            _commentId: _commentId,
            _type: "dislike"
        });
    }

    function withdrawThread(string memory _targetId, uint256 _amount)
    public
    threadShouldExist(_targetId)
    {
        address threadOwner = threads[_targetId].creator;

        require(
            threadOwner == msg.sender,
            "Only the owner can withdraw from this thread."
        );
        require(
            _amount <= threads[_targetId].balance,
            "Withdrawal amount exceeds the available balance."
        );

        threads[_targetId].balance -= _amount;

        payable(threadOwner).transfer(_amount);

        emit ThreadEvent({
            _user: msg.sender,
            _amount: _amount,
            _targetId: _targetId,
            _type: "withdraw"
        });
    }

    function withdrawComment(
        string memory _targetId,
        string memory _commentId,
        uint256 _amount
    ) public commentShouldExist(_commentId) {
        address commentOwner = comments[_targetId].creator;

        require(
            commentOwner == msg.sender,
            "Only the owner can withdraw from this comment."
        );
        require(
            _amount <= comments[_targetId].balance,
            "Withdrawal amount exceeds the available balance."
        );

        threads[_targetId].balance -= _amount;

        payable(commentOwner).transfer(_amount);

        emit CommentEvent({
            _user: msg.sender,
            _amount: _amount,
            _targetId: _targetId,
            _commentId: _commentId,
            _type: "withdraw"
        });
    }
}
