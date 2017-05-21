const StarRating = ({stars}) => (
    <div>
        {['★','★','★','★','★'].map((s, i) => {
            return i <= stars ? s : '☆';
        })}
        <style jsx>{`
            i {
                width:20px;
                height:20px;
            }
        `}</style>
    </div>
)

export default StarRating;
